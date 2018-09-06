/**
 *
 * CreateArticleMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
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
      title
      content
      author {
        id
        email
        fullName
      }
      comments {
        id
        content
      }
    }
  }
`;

export { CreateArticleMutationVariables, CreateArticleMutationResponse };

export default (variables: CreateArticleMutationVariables) =>
  new Promise<CreateArticleMutationResponse>((resolve, reject) =>
    commitMutation<CreateArticleMutation>(environment, {
      mutation,
      variables,
      updater: (store) => {
        // Take the newly created node.
        const createdArticle = store.getRootField('createArticle');
        if (!createdArticle) {
          return;
        }

        // Find the appropriate connection to which the node should be added.
        const connection = ConnectionHandler.getConnection(
          store.get('client:root'),
          'ArticlesTable_articlesConnection',
        );

        // Check if the connection exists.
        if (connection) {
          // Create an edge from the node.
          const edge = ConnectionHandler.createEdge(
            store,
            connection,
            createdArticle,
            'ArticleEdge',
          );

          // Insert the edge in the beginning of the connection.
          ConnectionHandler.insertEdgeBefore(connection, edge);
        }
      },
      onCompleted: resolve,
      onError: reject,
    }),
  );
