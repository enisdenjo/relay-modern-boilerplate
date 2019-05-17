/**
 *
 * CreateArticleMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler, SelectorStoreUpdater } from 'relay-runtime';
import environment from 'relay/environment';
import { randomString } from 'utils';

// types
import {
  CreateArticleMutation,
  CreateArticleMutationVariables,
  CreateArticleMutationResponse,
} from 'relay/artifacts/CreateArticleMutation.graphql';

const mutation = graphql`
  mutation CreateArticleMutation($input: CreateArticleInput!) {
    createArticle(input: $input) {
      articleEdge {
        node {
          id
          title
          content
          createdAt
          author {
            id
            fullName
          }
        }
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
    'ArticlesList_articles',
  );

  // Check if the connection exists.
  if (connection) {
    // Insert the edge in the beginning of the connection.
    ConnectionHandler.insertEdgeBefore(connection, createdArticle.getLinkedRecord('articleEdge'));
  }
};

export { CreateArticleMutationVariables, CreateArticleMutationResponse };

export interface CreateArticleMutationMetadata {
  author: NonNullable<
    NonNullable<CreateArticleMutationResponse['createArticle']>['articleEdge']
  >['node']['author'];
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
          articleEdge: {
            node: {
              id: `client:createdArticle:${randomString()}`,
              title: variables.input.title,
              content: variables.input.content || null,
              author: metadata.author,
              createdAt: new Date().toISOString(),
            },
          },
        },
      },
      updater: storeUpdater,
      optimisticUpdater: storeUpdater,
      onCompleted: resolve,
      onError: reject,
    }),
  );
