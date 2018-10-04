/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type AuthenticateInput = {
    readonly clientMutationId?: string | null;
    readonly email: string;
    readonly password: string;
};
export type AuthenticateMutationVariables = {
    readonly input: AuthenticateInput;
};
export type AuthenticateMutationResponse = {
    readonly authenticate: ({
        readonly jwtToken: any | null;
    }) | null;
};
export type AuthenticateMutation = {
    readonly response: AuthenticateMutationResponse;
    readonly variables: AuthenticateMutationVariables;
};



/*
mutation AuthenticateMutation(
  $input: AuthenticateInput!
) {
  authenticate(input: $input) {
    jwtToken
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AuthenticateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "authenticate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AuthenticateInput!"
      }
    ],
    "concreteType": "AuthenticatePayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "jwtToken",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AuthenticateMutation",
  "id": null,
  "text": "mutation AuthenticateMutation(\n  $input: AuthenticateInput!\n) {\n  authenticate(input: $input) {\n    jwtToken\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AuthenticateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthenticateMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node as any).hash = '992168c03b14bfcc0682e13e82fbefac';
export default node;
