/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ArticleWhereUniqueInput = {
    readonly id?: string | null;
};
export type EditArticleViewQueryVariables = {
    readonly where: ArticleWhereUniqueInput;
};
export type EditArticleViewQueryResponse = {
    readonly users: ReadonlyArray<({
        readonly id: string;
        readonly email: string;
        readonly fullName: string;
    }) | null>;
    readonly article: ({
        readonly id: string;
        readonly author: {
            readonly id: string;
            readonly email: string;
            readonly fullName: string;
        };
        readonly title: string;
        readonly content: string;
    }) | null;
};
export type EditArticleViewQuery = {
    readonly response: EditArticleViewQueryResponse;
    readonly variables: EditArticleViewQueryVariables;
};



/*
query EditArticleViewQuery(
  $where: ArticleWhereUniqueInput!
) {
  users {
    id
    email
    fullName
  }
  article(where: $where) {
    id
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
],
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": v2
  },
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
        "kind": "LinkedField",
        "alias": null,
        "name": "author",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": v2
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
  "text": "query EditArticleViewQuery(\n  $where: ArticleWhereUniqueInput!\n) {\n  users {\n    id\n    email\n    fullName\n  }\n  article(where: $where) {\n    id\n    author {\n      id\n      email\n      fullName\n    }\n    title\n    content\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EditArticleViewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "EditArticleViewQuery",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
(node as any).hash = '1de75bebbe58c37761ef4b960f263ffa';
export default node;
