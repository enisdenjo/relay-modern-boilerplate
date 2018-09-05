/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { NotesTable_query$ref } from "./NotesTable_query.graphql";
export type NotesPageQueryVariables = {};
export type NotesPageQueryResponse = {
    readonly " $fragmentRefs": NotesTable_query$ref;
};
export type NotesPageQuery = {
    readonly response: NotesPageQueryResponse;
    readonly variables: NotesPageQueryVariables;
};



/*
query NotesPageQuery {
  ...NotesTable_query
}

fragment NotesTable_query on Query {
  notesConnection(first: 2147483646) {
    aggregate {
      count
    }
    edges {
      node {
        id
        name
        description
        todos {
          id
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483646,
    "type": "Int"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "NotesPageQuery",
  "id": null,
  "text": "query NotesPageQuery {\n  ...NotesTable_query\n}\n\nfragment NotesTable_query on Query {\n  notesConnection(first: 2147483646) {\n    aggregate {\n      count\n    }\n    edges {\n      node {\n        id\n        name\n        description\n        todos {\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NotesPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "NotesTable_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NotesPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "notesConnection",
        "storageKey": "notesConnection(first:2147483646)",
        "args": v0,
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
                  v1,
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
                      v1
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
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "notesConnection",
        "args": v0,
        "handle": "connection",
        "key": "NotesTable_notesConnection",
        "filters": []
      }
    ]
  }
};
})();
(node as any).hash = '51c975cd175dd526808673d4e75116e7';
export default node;
