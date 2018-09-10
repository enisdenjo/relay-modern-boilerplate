/**
 *
 * CreateArticleMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler, SelectorStoreUpdater } from 'relay-runtime';
import environment from 'relay/environment';

// types
import {
  CreateArticleMutation,
  CreateArticleMutationVariables,
  CreateArticleMutationResponse,
} from 'artifacts/CreateArticleMutation.graphql';

const mutation = graphql`
  mutation CreateArticleMutation($data: ArticleCreateInput!) {
    createArticle(data: $data) {
      id
      createdAt
      title
      content
      author {
        id
        email
        fullName
      }
    }
  }
`;

const storeUpdater: SelectorStoreUpdater = (store) => {
  // Take the newly created node.
  const createdArticle = store.getRootField('createArticle');
  if (!createdArticle) {
    return;
  }

  // Find the appropriate connection to which the node should be added.
  const connection = ConnectionHandler.getConnection(
    store.get('client:root'),
    'ArticlesList_articlesConnection',
  );

  // Check if the connection exists.
  if (connection) {
    // Create an edge from the node.
    const edge = ConnectionHandler.createEdge(store, connection, createdArticle, 'ArticleEdge');

    // Insert the edge in the beginning of the connection.
    ConnectionHandler.insertEdgeBefore(connection, edge);
  }
};

export { CreateArticleMutationVariables, CreateArticleMutationResponse };

export interface CreateArticleMutationMetadata {
  author: CreateArticleMutationResponse['createArticle']['author'];
}

export default (
  variables: CreateArticleMutationVariables,
  metadata: CreateArticleMutationMetadata,
) =>
  new Promise<CreateArticleMutationResponse>((resolve, reject) =>
    commitMutation<CreateArticleMutation>(environment, {
      mutation,
      variables,
      optimisticResponse: {
        createArticle: {
          id: `client:createdArticle:${variables.data.title}`,
          createdAt: String(new Date()),
          title: variables.data.title,
          content: variables.data.content,
          author: metadata.author,
        },
      },
      updater: storeUpdater,
      onCompleted: resolve,
      onError: reject,
    }),
  );
