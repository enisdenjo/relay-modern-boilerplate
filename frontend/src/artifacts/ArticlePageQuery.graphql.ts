/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ArticleWhereUniqueInput = {
    readonly id?: string | null;
};
export type ArticlePageQueryVariables = {
    readonly where: ArticleWhereUniqueInput;
};
export type ArticlePageQueryResponse = {
    readonly article: ({
        readonly id: string;
        readonly title: string;
        readonly content: string;
        readonly author: {
            readonly id: string;
            readonly email: string;
            readonly fullName: string;
        };
        readonly comments: ReadonlyArray<{
            readonly id: string;
        }> | null;
    }) | null;
};
export type ArticlePageQuery = {
    readonly response: ArticlePageQueryResponse;
    readonly variables: ArticlePageQueryVariables;
};



/*
query ArticlePageQuery(
  $where: ArticleWhereUniqueInput!
) {
  article(where: $where) {
    id
    title
    content
    author {
      id
      email
      fullName
    }
    comments {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "where",
    "type": "ArticleWhereUniqueInput!",
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
        "name": "where",
        "variableName": "where",
        "type": "ArticleWhereUniqueInput!"
      }
    ],
    "concreteType": "Article",
    "plural": false,
    "selections": [
      v1,
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
        "kind": "LinkedField",
        "alias": null,
        "name": "comments",
        "storageKey": null,
        "args": null,
        "concreteType": "Comment",
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
  "operationKind": "query",
  "name": "ArticlePageQuery",
  "id": null,
  "text": "query ArticlePageQuery(\n  $where: ArticleWhereUniqueInput!\n) {\n  article(where: $where) {\n    id\n    title\n    content\n    author {\n      id\n      email\n      fullName\n    }\n    comments {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticlePageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticlePageQuery",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
(node as any).hash = '9d6ddd841f956f14f03a17ce20fda760';
export default node;
