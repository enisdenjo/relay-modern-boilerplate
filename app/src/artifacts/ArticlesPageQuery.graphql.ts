/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ArticlesPageQueryVariables = {};
export type ArticlesPageQueryResponse = {
    readonly query: {
        readonly allArticles: ({
            readonly nodes: ReadonlyArray<{
                readonly id: string;
            }>;
        }) | null;
    };
};
export type ArticlesPageQuery = {
    readonly response: ArticlesPageQueryResponse;
    readonly variables: ArticlesPageQueryVariables;
};



/*
query ArticlesPageQuery {
  query {
    allArticles {
      nodes {
        id
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allArticles",
  "storageKey": null,
  "args": null,
  "concreteType": "ArticlesConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "nodes",
      "storageKey": null,
      "args": null,
      "concreteType": "Article",
      "plural": true,
      "selections": [
        v0
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArticlesPageQuery",
  "id": null,
  "text": "query ArticlesPageQuery {\n  query {\n    allArticles {\n      nodes {\n        id\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticlesPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "query",
        "storageKey": null,
        "args": null,
        "concreteType": "Query",
        "plural": false,
        "selections": [
          v1
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticlesPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "query",
        "storageKey": null,
        "args": null,
        "concreteType": "Query",
        "plural": false,
        "selections": [
          v1,
          v0
        ]
      }
    ]
  }
};
})();
(node as any).hash = '149769cb0fabaf8615978fe613fb2a31';
export default node;
