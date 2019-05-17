/**
 *
 * DeleteArticleMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler, SelectorStoreUpdater } from 'relay-runtime';
import environment from 'relay/environment';

// types
import {
  DeleteArticleMutation,
  DeleteArticleMutationVariables,
  DeleteArticleMutationResponse,
} from 'relay/artifacts/DeleteArticleMutation.graphql';

const mutation = graphql`
  mutation DeleteArticleMutation($input: DeleteArticleInput!) {
    deleteArticle(input: $input) {
      article {
        id
      }
    }
  }
`;

const storeUpdater: SelectorStoreUpdater = (store) => {
  const root = store.getRootField('deleteArticle');
  if (!root) {
    return;
  }

  const deletedArticle = root.getLinkedRecord('article');
  if (!deletedArticle) {
    return;
  }

  // Find the appropriate connection from which the node should be deleted.
  const connection = ConnectionHandler.getConnection(
    store.get('client:root'),
    'ArticlesList_articles',
  );

  // Check if the connection exists.
  if (connection) {
    // Delete the node (edge also) from the connection.
    ConnectionHandler.deleteNode(connection, deletedArticle.getDataID());
  }
};

export { DeleteArticleMutationVariables, DeleteArticleMutationResponse };

export interface DeleteArticleMutationMetadata {
  id: string;
}

export default (
  variables: DeleteArticleMutationVariables,
  metadata: DeleteArticleMutationMetadata,
) =>
  new Promise<DeleteArticleMutationResponse>((resolve, reject) =>
    commitMutation<DeleteArticleMutation>(environment, {
      mutation,
      variables,
      optimisticResponse: {
        deleteArticle: {
          article: {
            id: metadata.id,
          },
        },
      },
      updater: storeUpdater,
      optimisticUpdater: storeUpdater,
      onCompleted: resolve,
      onError: reject,
    }),
  );
