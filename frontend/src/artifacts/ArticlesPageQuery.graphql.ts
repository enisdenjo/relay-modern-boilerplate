/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { ArticlesTable_query$ref } from "./ArticlesTable_query.graphql";
export type ArticlesPageQueryVariables = {};
export type ArticlesPageQueryResponse = {
    readonly " $fragmentRefs": ArticlesTable_query$ref;
};
export type ArticlesPageQuery = {
    readonly response: ArticlesPageQueryResponse;
    readonly variables: ArticlesPageQueryVariables;
};



/*
query ArticlesPageQuery {
  ...ArticlesTable_query
}

fragment ArticlesTable_query on Query {
  articlesConnection(first: 2147483646) {
    aggregate {
      count
    }
    edges {
      node {
        id
        title
        content
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
    "kind": "Literal",
    "name": "first",
    "value": 2147483646,
    "type": "Int"
  }
],
v1 = {
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
  "text": "query ArticlesPageQuery {\n  ...ArticlesTable_query\n}\n\nfragment ArticlesTable_query on Query {\n  articlesConnection(first: 2147483646) {\n    aggregate {\n      count\n    }\n    edges {\n      node {\n        id\n        title\n        content\n        author {\n          id\n          fullName\n        }\n        comments {\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArticlesPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ArticlesTable_query",
        "args": null
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
        "name": "articlesConnection",
        "storageKey": "articlesConnection(first:2147483646)",
        "args": v0,
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
        "args": v0,
        "handle": "connection",
        "key": "ArticlesTable_articlesConnection",
        "filters": []
      }
    ]
  }
};
})();
(node as any).hash = '16d33c059e9ede5523f101b8ef3a3552';
export default node;
