/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateArticleViewQueryVariables = {};
export type CreateArticleViewQueryResponse = {
    readonly users: ReadonlyArray<({
        readonly id: string;
        readonly email: string;
        readonly fullName: string;
    }) | null>;
};
export type CreateArticleViewQuery = {
    readonly response: CreateArticleViewQueryResponse;
    readonly variables: CreateArticleViewQueryVariables;
};



/*
query CreateArticleViewQuery {
  users {
    id
    email
    fullName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
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
        "name": "email",
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
  "name": "CreateArticleViewQuery",
  "id": null,
  "text": "query CreateArticleViewQuery {\n  users {\n    id\n    email\n    fullName\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateArticleViewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateArticleViewQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node as any).hash = 'd14b1aae87187e9e1f1935e40a2de1f9';
export default node;
