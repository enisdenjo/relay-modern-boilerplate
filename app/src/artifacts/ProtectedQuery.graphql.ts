/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ProtectedQueryVariables = {};
export type ProtectedQueryResponse = {
    readonly viewer: ({
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
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
    firstName
    lastName
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
        "name": "firstName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "lastName",
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
  "text": "query ProtectedQuery {\n  viewer {\n    id\n    firstName\n    lastName\n  }\n}\n",
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
(node as any).hash = 'caced7d044956b60429c320c939c99f3';
export default node;
