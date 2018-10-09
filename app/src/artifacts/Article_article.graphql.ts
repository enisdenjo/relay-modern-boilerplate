/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _Article_article$ref: unique symbol;
export type Article_article$ref = typeof _Article_article$ref;
export type Article_article = {
    readonly id: string;
    readonly rowId: any;
    readonly title: string;
    readonly content: string | null;
    readonly createdAt: any;
    readonly author: {
        readonly id: string;
        readonly fullName: string | null;
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
      "name": "rowId",
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
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "fullName",
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
(node as any).hash = 'f9a0128493357f64ab205aabf47e3ae1';
export default node;
