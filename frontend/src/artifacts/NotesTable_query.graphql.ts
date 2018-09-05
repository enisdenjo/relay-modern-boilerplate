/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _NotesTable_query$ref: unique symbol;
export type NotesTable_query$ref = typeof _NotesTable_query$ref;
export type NotesTable_query = {
    readonly notesConnection: {
        readonly aggregate: {
            readonly count: number;
        };
        readonly edges: ReadonlyArray<({
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly description: string | null;
                readonly todos: ReadonlyArray<{
                    readonly id: string;
                }> | null;
            };
        }) | null>;
    };
    readonly " $refType": NotesTable_query$ref;
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
  "name": "NotesTable_query",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "notesConnection"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "notesConnection",
      "name": "__NotesTable_notesConnection_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "NoteConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "aggregate",
          "storageKey": null,
          "args": null,
          "concreteType": "AggregateNote",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "count",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "NoteEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Note",
              "plural": false,
              "selections": [
                v0,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "description",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "todos",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Todo",
                  "plural": true,
                  "selections": [
                    v0
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
};
})();
(node as any).hash = 'eff7884e952c0b144a5e292fd7c3b0e4';
export default node;
