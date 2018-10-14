/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type EditArticleViewQueryVariables = {
    readonly id: string;
};
export type EditArticleViewQueryResponse = {
    readonly article: ({
        readonly id: string;
        readonly rowId: any;
        readonly author: {
            readonly id: string;
            readonly email: any;
            readonly fullName: string;
        };
        readonly title: string;
        readonly content: string | null;
    }) | null;
};
export type EditArticleViewQuery = {
    readonly response: EditArticleViewQueryResponse;
    readonly variables: EditArticleViewQueryVariables;
};



/*
query EditArticleViewQuery(
  $id: ID!
) {
  article(id: $id) {
    id
    rowId
    author {
      id
      email
      fullName
    }
    title
    content
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
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
    "name": "article",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      }
    ],
    "concreteType": "Article",
    "plural": false,
    "selections": [
      v1,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "rowId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "author",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v1,
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EditArticleViewQuery",
  "id": null,
  "text": "query EditArticleViewQuery(\n  $id: ID!\n) {\n  article(id: $id) {\n    id\n    rowId\n    author {\n      id\n      email\n      fullName\n    }\n    title\n    content\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EditArticleViewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "EditArticleViewQuery",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
(node as any).hash = 'c43c78a50c7653fc963504df3fff0db2';
export default node;
