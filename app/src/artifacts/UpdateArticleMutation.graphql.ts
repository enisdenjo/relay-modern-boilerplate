/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ArticleUpdateInput = {
    readonly title?: string | null;
    readonly content?: string | null;
    readonly author?: UserUpdateOneWithoutArticlesInput | null;
    readonly comments?: CommentUpdateManyWithoutArticleInput | null;
};
export type UserUpdateOneWithoutArticlesInput = {
    readonly create?: UserCreateWithoutArticlesInput | null;
    readonly connect?: UserWhereUniqueInput | null;
    readonly delete?: boolean | null;
    readonly update?: UserUpdateWithoutArticlesDataInput | null;
    readonly upsert?: UserUpsertWithoutArticlesInput | null;
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
export type UserCreateOneWithoutArticlesInput = {
    readonly create?: UserCreateWithoutArticlesInput | null;
    readonly connect?: UserWhereUniqueInput | null;
};
export type UserWhereUniqueInput = {
    readonly id?: string | null;
    readonly email?: string | null;
};
export type ArticleWhereUniqueInput = {
    readonly id?: string | null;
};
export type CommentWhereUniqueInput = {
    readonly id?: string | null;
};
export type UserUpdateWithoutArticlesDataInput = {
    readonly email?: string | null;
    readonly fullName?: string | null;
    readonly comments?: CommentUpdateManyWithoutAuthorInput | null;
};
export type CommentUpdateManyWithoutAuthorInput = {
    readonly create?: ReadonlyArray<CommentCreateWithoutAuthorInput> | null;
    readonly connect?: ReadonlyArray<CommentWhereUniqueInput> | null;
    readonly disconnect?: ReadonlyArray<CommentWhereUniqueInput> | null;
    readonly delete?: ReadonlyArray<CommentWhereUniqueInput> | null;
    readonly update?: ReadonlyArray<CommentUpdateWithWhereUniqueWithoutAuthorInput> | null;
    readonly upsert?: ReadonlyArray<CommentUpsertWithWhereUniqueWithoutAuthorInput> | null;
};
export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    readonly where: CommentWhereUniqueInput;
    readonly data: CommentUpdateWithoutAuthorDataInput;
};
export type CommentUpdateWithoutAuthorDataInput = {
    readonly content?: string | null;
    readonly article?: ArticleUpdateOneWithoutCommentsInput | null;
};
export type ArticleUpdateOneWithoutCommentsInput = {
    readonly create?: ArticleCreateWithoutCommentsInput | null;
    readonly connect?: ArticleWhereUniqueInput | null;
    readonly delete?: boolean | null;
    readonly update?: ArticleUpdateWithoutCommentsDataInput | null;
    readonly upsert?: ArticleUpsertWithoutCommentsInput | null;
};
export type ArticleUpdateWithoutCommentsDataInput = {
    readonly title?: string | null;
    readonly content?: string | null;
    readonly author?: UserUpdateOneWithoutArticlesInput | null;
};
export type ArticleUpsertWithoutCommentsInput = {
    readonly update: ArticleUpdateWithoutCommentsDataInput;
    readonly create: ArticleCreateWithoutCommentsInput;
};
export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    readonly where: CommentWhereUniqueInput;
    readonly update: CommentUpdateWithoutAuthorDataInput;
    readonly create: CommentCreateWithoutAuthorInput;
};
export type UserUpsertWithoutArticlesInput = {
    readonly update: UserUpdateWithoutArticlesDataInput;
    readonly create: UserCreateWithoutArticlesInput;
};
export type CommentUpdateManyWithoutArticleInput = {
    readonly create?: ReadonlyArray<CommentCreateWithoutArticleInput> | null;
    readonly connect?: ReadonlyArray<CommentWhereUniqueInput> | null;
    readonly disconnect?: ReadonlyArray<CommentWhereUniqueInput> | null;
    readonly delete?: ReadonlyArray<CommentWhereUniqueInput> | null;
    readonly update?: ReadonlyArray<CommentUpdateWithWhereUniqueWithoutArticleInput> | null;
    readonly upsert?: ReadonlyArray<CommentUpsertWithWhereUniqueWithoutArticleInput> | null;
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
export type CommentCreateManyWithoutArticleInput = {
    readonly create?: ReadonlyArray<CommentCreateWithoutArticleInput> | null;
    readonly connect?: ReadonlyArray<CommentWhereUniqueInput> | null;
};
export type CommentUpdateWithWhereUniqueWithoutArticleInput = {
    readonly where: CommentWhereUniqueInput;
    readonly data: CommentUpdateWithoutArticleDataInput;
};
export type CommentUpdateWithoutArticleDataInput = {
    readonly content?: string | null;
    readonly author?: UserUpdateOneWithoutCommentsInput | null;
};
export type UserUpdateOneWithoutCommentsInput = {
    readonly create?: UserCreateWithoutCommentsInput | null;
    readonly connect?: UserWhereUniqueInput | null;
    readonly delete?: boolean | null;
    readonly update?: UserUpdateWithoutCommentsDataInput | null;
    readonly upsert?: UserUpsertWithoutCommentsInput | null;
};
export type UserUpdateWithoutCommentsDataInput = {
    readonly email?: string | null;
    readonly fullName?: string | null;
    readonly articles?: ArticleUpdateManyWithoutAuthorInput | null;
};
export type ArticleUpdateManyWithoutAuthorInput = {
    readonly create?: ReadonlyArray<ArticleCreateWithoutAuthorInput> | null;
    readonly connect?: ReadonlyArray<ArticleWhereUniqueInput> | null;
    readonly disconnect?: ReadonlyArray<ArticleWhereUniqueInput> | null;
    readonly delete?: ReadonlyArray<ArticleWhereUniqueInput> | null;
    readonly update?: ReadonlyArray<ArticleUpdateWithWhereUniqueWithoutAuthorInput> | null;
    readonly upsert?: ReadonlyArray<ArticleUpsertWithWhereUniqueWithoutAuthorInput> | null;
};
export type ArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    readonly where: ArticleWhereUniqueInput;
    readonly data: ArticleUpdateWithoutAuthorDataInput;
};
export type ArticleUpdateWithoutAuthorDataInput = {
    readonly title?: string | null;
    readonly content?: string | null;
    readonly comments?: CommentUpdateManyWithoutArticleInput | null;
};
export type ArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    readonly where: ArticleWhereUniqueInput;
    readonly update: ArticleUpdateWithoutAuthorDataInput;
    readonly create: ArticleCreateWithoutAuthorInput;
};
export type UserUpsertWithoutCommentsInput = {
    readonly update: UserUpdateWithoutCommentsDataInput;
    readonly create: UserCreateWithoutCommentsInput;
};
export type CommentUpsertWithWhereUniqueWithoutArticleInput = {
    readonly where: CommentWhereUniqueInput;
    readonly update: CommentUpdateWithoutArticleDataInput;
    readonly create: CommentCreateWithoutArticleInput;
};
export type UpdateArticleMutationVariables = {
    readonly data: ArticleUpdateInput;
    readonly where: ArticleWhereUniqueInput;
};
export type UpdateArticleMutationResponse = {
    readonly updateArticle: ({
        readonly id: string;
        readonly title: string;
        readonly content: string;
        readonly author: {
            readonly id: string;
            readonly email: string;
            readonly fullName: string;
        };
    }) | null;
};
export type UpdateArticleMutation = {
    readonly response: UpdateArticleMutationResponse;
    readonly variables: UpdateArticleMutationVariables;
};



/*
mutation UpdateArticleMutation(
  $data: ArticleUpdateInput!
  $where: ArticleWhereUniqueInput!
) {
  updateArticle(data: $data, where: $where) {
    id
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
    "type": "ArticleUpdateInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "where",
    "type": "ArticleWhereUniqueInput!",
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
    "name": "updateArticle",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data",
        "type": "ArticleUpdateInput!"
      },
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
  "name": "UpdateArticleMutation",
  "id": null,
  "text": "mutation UpdateArticleMutation(\n  $data: ArticleUpdateInput!\n  $where: ArticleWhereUniqueInput!\n) {\n  updateArticle(data: $data, where: $where) {\n    id\n    title\n    content\n    author {\n      id\n      email\n      fullName\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateArticleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateArticleMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
(node as any).hash = 'c5bce0b4cfaa3336ff17c41437ce556a';
export default node;
