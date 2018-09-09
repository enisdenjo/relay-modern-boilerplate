/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { Article_article$ref } from "./Article_article.graphql";
export type ArticleWhereUniqueInput = {
    readonly id?: string | null;
};
export type ArticlePageQueryVariables = {
    readonly where: ArticleWhereUniqueInput;
};
export type ArticlePageQueryResponse = {
    readonly article: ({
        readonly " $fragmentRefs": Article_article$ref;
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
    ...Article_article
    id
  }
}

fragment Article_article on Article {
  id
  createdAt
  title
  content
  author {
    id
    fullName
    email
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
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where",
    "type": "ArticleWhereUniqueInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArticlePageQuery",
  "id": null,
  "text": "query ArticlePageQuery(\n  $where: ArticleWhereUniqueInput!\n) {\n  article(where: $where) {\n    ...Article_article\n    id\n  }\n}\n\nfragment Article_article on Article {\n  id\n  createdAt\n  title\n  content\n  author {\n    id\n    fullName\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticlePageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "article",
        "storageKey": null,
        "args": v1,
        "concreteType": "Article",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Article_article",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticlePageQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "article",
        "storageKey": null,
        "args": v1,
        "concreteType": "Article",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
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
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "fullName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node as any).hash = 'a5d860dc4ebe126d004aab467e80aa7a';
export default node;
