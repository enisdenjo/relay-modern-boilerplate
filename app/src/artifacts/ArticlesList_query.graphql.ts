/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _ArticlesList_query$ref: unique symbol;
export type ArticlesList_query$ref = typeof _ArticlesList_query$ref;
export type ArticlesList_query = {
    readonly articles: {
        readonly totalCount: number;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly title: string;
                readonly content: string | null;
                readonly createdAt: any;
                readonly author: {
                    readonly id: string;
                    readonly fullName: string;
                };
            };
        }>;
    } | null;
    readonly " $refType": ArticlesList_query$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "ArticlesList_query",
        "type": "Query",
        "metadata": {
            "connection": [
                {
                    "count": "count",
                    "cursor": "cursor",
                    "direction": "forward",
                    "path": [
                        "articles"
                    ]
                }
            ]
        },
        "argumentDefinitions": [
            {
                "kind": "LocalArgument",
                "name": "cursor",
                "type": "Cursor",
                "defaultValue": null
            },
            {
                "kind": "LocalArgument",
                "name": "count",
                "type": "Int!",
                "defaultValue": null
            }
        ],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": "articles",
                "name": "__ArticlesList_articles_connection",
                "storageKey": null,
                "args": null,
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
                                    (v0 /*: any*/),
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
                                            (v0 /*: any*/),
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
            }
        ]
    } as any;
})();
(node as any).hash = '1d083c645fcff989f5879664577672b1';
export default node;
