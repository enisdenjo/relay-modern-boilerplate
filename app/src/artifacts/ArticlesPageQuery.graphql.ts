/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { ArticlesList_query$ref } from "./ArticlesList_query.graphql";
export type ArticlesPageQueryVariables = {
    readonly count: number;
};
export type ArticlesPageQueryResponse = {
    readonly " $fragmentRefs": ArticlesList_query$ref;
};
export type ArticlesPageQuery = {
    readonly response: ArticlesPageQueryResponse;
    readonly variables: ArticlesPageQueryVariables;
};



/*
query ArticlesPageQuery(
  $count: Int!
) {
  ...ArticlesList_query_yu5n1
}

fragment ArticlesList_query_yu5n1 on Query {
  articlesConnection(first: $count) {
    aggregate {
      count
    }
    edges {
      node {
        id
        title
        content
        createdAt
        author {
          id
          fullName
        }
        comments {
          id
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
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
  "name": "ArticlesPageQuery",
  "id": null,
  "text": "query ArticlesPageQuery(\n  $count: Int!\n) {\n  ...ArticlesList_query_yu5n1\n}\n\nfragment ArticlesList_query_yu5n1 on Query {\n  articlesConnection(first: $count) {\n    aggregate {\n      count\n    }\n    edges {\n      node {\n        id\n        title\n        content\n        createdAt\n        author {\n          id\n          fullName\n        }\n        comments {\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticlesPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ArticlesList_query",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticlesPageQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "articlesConnection",
        "storageKey": null,
        "args": v1,
        "concreteType": "ArticleConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "aggregate",
            "storageKey": null,
            "args": null,
            "concreteType": "AggregateArticle",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "count",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ArticleEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Article",
                "plural": false,
                "selections": [
                  v2,
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
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
                      v2
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "articlesConnection",
        "args": v1,
        "handle": "connection",
        "key": "ArticlesList_articlesConnection",
        "filters": []
      }
    ]
  }
};
})();
(node as any).hash = 'c3e4cb4d2649990465f76aa0255c8933';
export default node;
