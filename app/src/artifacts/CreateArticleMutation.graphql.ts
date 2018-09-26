/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ArticleCreateInput = {
    readonly title: string;
    readonly content: string;
    readonly author: UserCreateOneWithoutArticlesInput;
    readonly comments?: CommentCreateManyWithoutArticleInput | null;
};
export type UserCreateOneWithoutArticlesInput = {
    readonly create?: UserCreateWithoutArticlesInput | null;
    readonly connect?: UserWhereUniqueInput | null;
};
export type UserCreateWithoutArticlesInput = {
    readonly email: string;
    readonly fullName: string;
    readonly comments?: CommentCreateManyWithoutAuthorInput | null;
};
export type CommentCreateManyWithoutAuthorInput = {
    readonly create?: ReadonlyArray<CommentCreateWithoutAuthorInput> | null;
    readonly connect?: ReadonlyArray<CommentWhereUniqueInput> | null;
};
export type CommentCreateWithoutAuthorInput = {
    readonly content: string;
    readonly article: ArticleCreateOneWithoutCommentsInput;
};
export type ArticleCreateOneWithoutCommentsInput = {
    readonly create?: ArticleCreateWithoutCommentsInput | null;
    readonly connect?: ArticleWhereUniqueInput | null;
};
export type ArticleCreateWithoutCommentsInput = {
    readonly title: string;
    readonly content: string;
    readonly author: UserCreateOneWithoutArticlesInput;
};
export type ArticleWhereUniqueInput = {
    readonly id?: string | null;
};
export type CommentWhereUniqueInput = {
    readonly id?: string | null;
};
export type UserWhereUniqueInput = {
    readonly id?: string | null;
    readonly email?: string | null;
};
export type CommentCreateManyWithoutArticleInput = {
    readonly create?: ReadonlyArray<CommentCreateWithoutArticleInput> | null;
    readonly connect?: ReadonlyArray<CommentWhereUniqueInput> | null;
};
export type CommentCreateWithoutArticleInput = {
    readonly content: string;
    readonly author: UserCreateOneWithoutCommentsInput;
};
export type UserCreateOneWithoutCommentsInput = {
    readonly create?: UserCreateWithoutCommentsInput | null;
    readonly connect?: UserWhereUniqueInput | null;
};
export type UserCreateWithoutCommentsInput = {
    readonly email: string;
    readonly fullName: string;
    readonly articles?: ArticleCreateManyWithoutAuthorInput | null;
};
export type ArticleCreateManyWithoutAuthorInput = {
    readonly create?: ReadonlyArray<ArticleCreateWithoutAuthorInput> | null;
    readonly connect?: ReadonlyArray<ArticleWhereUniqueInput> | null;
};
export type ArticleCreateWithoutAuthorInput = {
    readonly title: string;
    readonly content: string;
    readonly comments?: CommentCreateManyWithoutArticleInput | null;
};
export type CreateArticleMutationVariables = {
    readonly data: ArticleCreateInput;
};
export type CreateArticleMutationResponse = {
    readonly createArticle: {
        readonly id: string;
        readonly createdAt: any;
        readonly title: string;
        readonly content: string;
        readonly author: {
            readonly id: string;
            readonly email: string;
            readonly fullName: string;
        };
    };
};
export type CreateArticleMutation = {
    readonly response: CreateArticleMutationResponse;
    readonly variables: CreateArticleMutationVariables;
};



/*
mutation CreateArticleMutation(
  $data: ArticleCreateInput!
) {
  createArticle(data: $data) {
    id
    createdAt
    title
    content
    author {
      id
      email
      fullName
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "data",
    "type": "ArticleCreateInput!",
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
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createArticle",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data",
        "type": "ArticleCreateInput!"
      }
    ],
    "concreteType": "Article",
    "plural": false,
    "selections": [
      v1,
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
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateArticleMutation",
  "id": null,
  "text": "mutation CreateArticleMutation(\n  $data: ArticleCreateInput!\n) {\n  createArticle(data: $data) {\n    id\n    createdAt\n    title\n    content\n    author {\n      id\n      email\n      fullName\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateArticleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateArticleMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
(node as any).hash = '17b1f01bdc846a495defb5752ab1cef0';
export default node;
