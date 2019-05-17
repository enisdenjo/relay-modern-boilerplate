/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { ArticlesList_query$ref } from "./ArticlesList_query.graphql";
export type ArticlesPageQueryVariables = {
    readonly count: number;
    readonly cursor?: any | null;
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
  $cursor: Cursor
) {
  ...ArticlesList_query_1G22uz
}

fragment ArticlesList_query_1G22uz on Query {
  articles(first: $count, after: $cursor) {
    totalCount
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

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "count",
            "type": "Int!",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "cursor",
            "type": "Cursor",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor"
        } as any),
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "count"
        } as any)
    ], v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "ArticlesPageQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "FragmentSpread",
                    "name": "ArticlesList_query",
                    "args": [
                        {
                            "kind": "Variable",
                            "name": "count",
                            "variableName": "count"
                        },
                        {
                            "kind": "Variable",
                            "name": "cursor",
                            "variableName": "cursor"
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "ArticlesPageQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "articles",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "ArticlesConnection",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "totalCount",
                            "args": null,
                            "storageKey": null
                        },
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ArticlesEdge",
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
                                        (v2 /*: any*/),
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
                                                (v2 /*: any*/),
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
                    "name": "articles",
                    "args": (v1 /*: any*/),
                    "handle": "connection",
                    "key": "ArticlesList_articles",
                    "filters": []
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "ArticlesPageQuery",
            "id": null,
            "text": "query ArticlesPageQuery(\n  $count: Int!\n  $cursor: Cursor\n) {\n  ...ArticlesList_query_1G22uz\n}\n\nfragment ArticlesList_query_1G22uz on Query {\n  articles(first: $count, after: $cursor) {\n    totalCount\n    edges {\n      node {\n        id\n        title\n        content\n        createdAt\n        author {\n          id\n          fullName\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '032a18e4fd21284927088cdf65a6f293';
export default node;
