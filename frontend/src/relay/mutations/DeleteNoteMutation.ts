/**
 *
 * DeleteNoteMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from 'relay/environment';

// types
import {
  DeleteNoteMutation,
  DeleteNoteMutationVariables,
  DeleteNoteMutationResponse,
} from 'artifacts/DeleteNoteMutation.graphql';

const mutation = graphql`
  mutation DeleteNoteMutation($where: NoteWhereUniqueInput!) {
    deleteNote(where: $where) {
      id
    }
  }
`;

export { DeleteNoteMutationVariables, DeleteNoteMutationResponse };

export default (variables: DeleteNoteMutationVariables) =>
  new Promise<DeleteNoteMutationResponse>((resolve, reject) =>
    commitMutation<DeleteNoteMutation>(environment, {
      mutation,
      variables,
      updater: (store) => {
        // Take the deleted node.
        const deletedNote = store.getRootField('deleteNote');
        if (!deletedNote) {
          return;
        }

        // Find the appropriate connection from which the node should be deleted.
        const notesConnection = ConnectionHandler.getConnection(
          store.get('client:root'),
          'NotesTable_notesConnection',
        );

        // Check if the connection exists.
        if (notesConnection) {
          // Delete the node (edge also) from the connection.
          ConnectionHandler.deleteNode(notesConnection, deletedNote.getDataID());
        }
      },
      onCompleted: resolve,
      onError: reject,
    }),
  );
