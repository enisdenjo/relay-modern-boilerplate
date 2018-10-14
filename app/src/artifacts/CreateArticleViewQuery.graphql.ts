/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateArticleViewQueryVariables = {};
export type CreateArticleViewQueryResponse = {
    readonly viewer: ({
        readonly id: string;
        readonly fullName: string;
    }) | null;
};
export type CreateArticleViewQuery = {
    readonly response: CreateArticleViewQueryResponse;
    readonly variables: CreateArticleViewQueryVariables;
};



/*
query CreateArticleViewQuery {
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
  "name": "CreateArticleViewQuery",
  "id": null,
  "text": "query CreateArticleViewQuery {\n  viewer {\n    id\n    fullName\n  }\n}\n",
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
(node as any).hash = 'dbeccc5fe81a2c6bc189dc98accd6870';
export default node;
