/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteArticleInput = {
    readonly clientMutationId?: string | null;
    readonly rowId: any;
};
export type DeleteArticleMutationVariables = {
    readonly input: DeleteArticleInput;
};
export type DeleteArticleMutationResponse = {
    readonly deleteArticle: {
        readonly article: {
            readonly id: string;
        } | null;
    } | null;
};
export type DeleteArticleMutation = {
    readonly response: DeleteArticleMutationResponse;
    readonly variables: DeleteArticleMutationVariables;
};



/*
mutation DeleteArticleMutation(
  $input: DeleteArticleInput!
) {
  deleteArticle(input: $input) {
    article {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "DeleteArticleInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "deleteArticle",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "DeleteArticlePayload",
            "plural": false,
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "article",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Article",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "id",
                            "args": null,
                            "storageKey": null
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
            "name": "DeleteArticleMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "DeleteArticleMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "DeleteArticleMutation",
            "id": null,
            "text": "mutation DeleteArticleMutation(\n  $input: DeleteArticleInput!\n) {\n  deleteArticle(input: $input) {\n    article {\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'a25991f283cc2c174719c5e3dd5bc18f';
export default node;
