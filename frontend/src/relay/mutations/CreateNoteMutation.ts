/**
 *
 * CreateNoteMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from 'relay/environment';

// types
import {
  CreateNoteMutation,
  CreateNoteMutationVariables,
  CreateNoteMutationResponse,
} from 'artifacts/CreateNoteMutation.graphql';

const mutation = graphql`
  mutation CreateNoteMutation($data: NoteCreateInput!) {
    createNote(data: $data) {
      id
      name
      description
      todos {
        id
      }
    }
  }
`;

export { CreateNoteMutationVariables, CreateNoteMutationResponse };

export default (variables: CreateNoteMutationVariables) =>
  new Promise<CreateNoteMutationResponse>((resolve, reject) =>
    commitMutation<CreateNoteMutation>(environment, {
      mutation,
      variables,
      updater: (store) => {
        // Take the newly created node.
        const createdNote = store.getRootField('createNote');
        if (!createdNote) {
          return;
        }

        // Find the appropriate connection to which the node should be added.
        const notesConnection = ConnectionHandler.getConnection(
          store.get('client:root'),
          'NotesTable_notesConnection',
        );

        // Check if the connection exists.
        if (notesConnection) {
          // Create an edge from the node.
          const edge = ConnectionHandler.createEdge(
            store,
            notesConnection,
            createdNote,
            'NoteEdge',
          );

          // Insert the edge in the beginning of the connection.
          ConnectionHandler.insertEdgeBefore(notesConnection, edge);
        }
      },
      onCompleted: resolve,
      onError: reject,
    }),
  );
