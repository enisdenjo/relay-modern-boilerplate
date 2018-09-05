/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type NoteCreateInput = {
    readonly name: string;
    readonly description?: string | null;
    readonly todos?: TodoCreateManyWithoutNoteInput | null;
};
export type TodoCreateManyWithoutNoteInput = {
    readonly create?: ReadonlyArray<TodoCreateWithoutNoteInput> | null;
    readonly connect?: ReadonlyArray<TodoWhereUniqueInput> | null;
};
export type TodoCreateWithoutNoteInput = {
    readonly done?: boolean | null;
    readonly name: string;
};
export type TodoWhereUniqueInput = {
    readonly id?: string | null;
};
export type CreateNoteMutationVariables = {
    readonly data: NoteCreateInput;
};
export type CreateNoteMutationResponse = {
    readonly createNote: {
        readonly id: string;
        readonly name: string;
        readonly description: string | null;
        readonly todos: ReadonlyArray<{
            readonly id: string;
        }> | null;
    };
};
export type CreateNoteMutation = {
    readonly response: CreateNoteMutationResponse;
    readonly variables: CreateNoteMutationVariables;
};



/*
mutation CreateNoteMutation(
  $data: NoteCreateInput!
) {
  createNote(data: $data) {
    id
    name
    description
    todos {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "data",
    "type": "NoteCreateInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createNote",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data",
        "type": "NoteCreateInput!"
      }
    ],
    "concreteType": "Note",
    "plural": false,
    "selections": [
      v1,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todos",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": true,
        "selections": [
          v1
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateNoteMutation",
  "id": null,
  "text": "mutation CreateNoteMutation(\n  $data: NoteCreateInput!\n) {\n  createNote(data: $data) {\n    id\n    name\n    description\n    todos {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateNoteMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
(node as any).hash = '95afc566b6557561bed8821a55ca3743';
export default node;
