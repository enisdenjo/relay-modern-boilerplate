/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ArticleWhereUniqueInput = {
    readonly id?: string | null;
};
export type DeleteArticleMutationVariables = {
    readonly where: ArticleWhereUniqueInput;
};
export type DeleteArticleMutationResponse = {
    readonly deleteArticle: ({
        readonly id: string;
    }) | null;
};
export type DeleteArticleMutation = {
    readonly response: DeleteArticleMutationResponse;
    readonly variables: DeleteArticleMutationVariables;
};



/*
mutation DeleteArticleMutation(
  $where: ArticleWhereUniqueInput!
) {
  deleteArticle(where: $where) {
    id
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
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteArticle",
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
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteArticleMutation",
  "id": null,
  "text": "mutation DeleteArticleMutation(\n  $where: ArticleWhereUniqueInput!\n) {\n  deleteArticle(where: $where) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteArticleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteArticleMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node as any).hash = '7fea8426de5cd80795bbc6c43027ab75';
export default node;
