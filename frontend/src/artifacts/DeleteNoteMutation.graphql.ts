/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type NoteWhereUniqueInput = {
    readonly id?: string | null;
};
export type DeleteNoteMutationVariables = {
    readonly where: NoteWhereUniqueInput;
};
export type DeleteNoteMutationResponse = {
    readonly deleteNote: ({
        readonly id: string;
    }) | null;
};
export type DeleteNoteMutation = {
    readonly response: DeleteNoteMutationResponse;
    readonly variables: DeleteNoteMutationVariables;
};



/*
mutation DeleteNoteMutation(
  $where: NoteWhereUniqueInput!
) {
  deleteNote(where: $where) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "where",
    "type": "NoteWhereUniqueInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteNote",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "where",
        "type": "NoteWhereUniqueInput!"
      }
    ],
    "concreteType": "Note",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteNoteMutation",
  "id": null,
  "text": "mutation DeleteNoteMutation(\n  $where: NoteWhereUniqueInput!\n) {\n  deleteNote(where: $where) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteNoteMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node as any).hash = '506824bb46ab52016153bb20f3d17282';
export default node;
