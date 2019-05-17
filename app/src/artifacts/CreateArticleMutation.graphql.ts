/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateArticleInput = {
    readonly clientMutationId?: string | null;
    readonly content?: string | null;
    readonly title: string;
};
export type CreateArticleMutationVariables = {
    readonly input: CreateArticleInput;
};
export type CreateArticleMutationResponse = {
    readonly createArticle: {
        readonly articleEdge: {
            readonly node: {
                readonly id: string;
                readonly title: string;
                readonly content: string | null;
                readonly createdAt: any;
                readonly author: {
                    readonly id: string;
                    readonly fullName: string | null;
                };
            };
        } | null;
    } | null;
};
export type CreateArticleMutation = {
    readonly response: CreateArticleMutationResponse;
    readonly variables: CreateArticleMutationVariables;
};



/*
mutation CreateArticleMutation(
  $input: CreateArticleInput!
) {
  createArticle(input: $input) {
    articleEdge {
      node {
        id
        title
        content
        createdAt
        author {
          id
          fullName
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "CreateArticleInput!",
            "defaultValue": null
        } as any)
    ], v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v2 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "createArticle",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "CreateArticlePayload",
            "plural": false,
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "articleEdge",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArticlesEdge",
                    "plural": false,
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
                                (v1 /*: any*/),
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
                                        (v1 /*: any*/),
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "fullName",
                                            "args": null,
                                            "storageKey": null
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "CreateArticleMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v2 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "CreateArticleMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v2 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "CreateArticleMutation",
            "id": null,
            "text": "mutation CreateArticleMutation(\n  $input: CreateArticleInput!\n) {\n  createArticle(input: $input) {\n    articleEdge {\n      node {\n        id\n        title\n        content\n        createdAt\n        author {\n          id\n          fullName\n        }\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '0e82057c38ceb941acd73090bc7da54d';
export default node;
