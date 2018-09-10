/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type AddArticleViewQueryVariables = {};
export type AddArticleViewQueryResponse = {
    readonly users: ReadonlyArray<({
        readonly id: string;
        readonly email: string;
        readonly fullName: string;
    }) | null>;
};
export type AddArticleViewQuery = {
    readonly response: AddArticleViewQueryResponse;
    readonly variables: AddArticleViewQueryVariables;
};



/*
query AddArticleViewQuery {
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
  "name": "AddArticleViewQuery",
  "id": null,
  "text": "query AddArticleViewQuery {\n  users {\n    id\n    email\n    fullName\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddArticleViewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "AddArticleViewQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node as any).hash = 'af48ba594e1775c99340249578425941';
export default node;
