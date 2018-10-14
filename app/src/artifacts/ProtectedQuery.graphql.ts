/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ProtectedQueryVariables = {};
export type ProtectedQueryResponse = {
    readonly viewer: ({
        readonly id: string;
        readonly fullName: string;
    }) | null;
};
export type ProtectedQuery = {
    readonly response: ProtectedQueryResponse;
    readonly variables: ProtectedQueryVariables;
};



/*
query ProtectedQuery {
  viewer {
    id
    fullName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "fullName",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ProtectedQuery",
  "id": null,
  "text": "query ProtectedQuery {\n  viewer {\n    id\n    fullName\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProtectedQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "ProtectedQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node as any).hash = '7a2a14397a12e0d17ad7cbb20e80242a';
export default node;
