/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _Article_article$ref: unique symbol;
export type Article_article$ref = typeof _Article_article$ref;
export type Article_article = {
    readonly id: string;
    readonly createdAt: any;
    readonly title: string;
    readonly content: string | null;
    readonly author: {
        readonly id: string;
        readonly firstName: string;
        readonly email: any;
    };
    readonly " $refType": Article_article$ref;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Article_article",
  "type": "Article",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
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
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "firstName",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "email",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = '5c60b0a62000f90b0f9dcc544f686fd3';
export default node;
