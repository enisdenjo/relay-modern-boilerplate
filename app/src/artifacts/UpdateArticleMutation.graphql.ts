/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateArticleInput = {
    readonly clientMutationId?: string | null;
    readonly rowId: any;
    readonly title: string;
    readonly content?: string | null;
};
export type UpdateArticleMutationVariables = {
    readonly input: UpdateArticleInput;
};
export type UpdateArticleMutationResponse = {
    readonly updateArticle: ({
        readonly article: ({
            readonly id: string;
            readonly title: string;
            readonly content: string | null;
            readonly updatedAt: any;
        }) | null;
    }) | null;
};
export type UpdateArticleMutation = {
    readonly response: UpdateArticleMutationResponse;
    readonly variables: UpdateArticleMutationVariables;
};



/*
mutation UpdateArticleMutation(
  $input: UpdateArticleInput!
) {
  updateArticle(input: $input) {
    article {
      id
      title
      content
      updatedAt
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateArticleInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateArticle",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateArticleInput!"
      }
    ],
    "concreteType": "UpdateArticlePayload",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "updatedAt",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateArticleMutation",
  "id": null,
  "text": "mutation UpdateArticleMutation(\n  $input: UpdateArticleInput!\n) {\n  updateArticle(input: $input) {\n    article {\n      id\n      title\n      content\n      updatedAt\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateArticleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateArticleMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node as any).hash = '0c09d677ccd0565e24762d00eba4643c';
export default node;
