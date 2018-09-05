/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type NoteWhereUniqueInput = {
    readonly id?: string | null;
};
export type NotePageQueryVariables = {
    readonly where: NoteWhereUniqueInput;
};
export type NotePageQueryResponse = {
    readonly note: ({
        readonly id: string;
        readonly name: string;
        readonly todos: ReadonlyArray<{
            readonly id: string;
            readonly done: boolean;
            readonly name: string;
        }> | null;
    }) | null;
};
export type NotePageQuery = {
    readonly response: NotePageQueryResponse;
    readonly variables: NotePageQueryVariables;
};



/*
query NotePageQuery(
  $where: NoteWhereUniqueInput!
) {
  note(where: $where) {
    id
    name
    todos {
      id
      done
      name
    }
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "note",
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
      v1,
      v2,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todos",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": true,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "done",
            "args": null,
            "storageKey": null
          },
          v2
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "NotePageQuery",
  "id": null,
  "text": "query NotePageQuery(\n  $where: NoteWhereUniqueInput!\n) {\n  note(where: $where) {\n    id\n    name\n    todos {\n      id\n      done\n      name\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NotePageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "NotePageQuery",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
(node as any).hash = '1071026f80f425fd60fd82f276aa24ae';
export default node;
