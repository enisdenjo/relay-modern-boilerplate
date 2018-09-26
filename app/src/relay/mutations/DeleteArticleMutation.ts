/**
 *
 * DeleteArticleMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from 'relay/environment';

// types
import {
  DeleteArticleMutation,
  DeleteArticleMutationVariables,
  DeleteArticleMutationResponse,
} from 'artifacts/DeleteArticleMutation.graphql';

const mutation = graphql`
  mutation DeleteArticleMutation($where: ArticleWhereUniqueInput!) {
    deleteArticle(where: $where) {
      id
    }
  }
`;

export { DeleteArticleMutationVariables, DeleteArticleMutationResponse };

export default (variables: DeleteArticleMutationVariables) =>
  new Promise<DeleteArticleMutationResponse>((resolve, reject) =>
    commitMutation<DeleteArticleMutation>(environment, {
      mutation,
      variables,
      updater: (store) => {
        // Take the deleted node.
        const deletedArticle = store.getRootField('deleteArticle');
        if (!deletedArticle) {
          return;
        }

        // Find the appropriate connection from which the node should be deleted.
        const connection = ConnectionHandler.getConnection(
          store.get('client:root'),
          'ArticlesList_articlesConnection',
        );

        // Check if the connection exists.
        if (connection) {
          // Delete the node (edge also) from the connection.
          ConnectionHandler.deleteNode(connection, deletedArticle.getDataID());
        }
      },
      onCompleted: resolve,
      onError: reject,
    }),
  );
