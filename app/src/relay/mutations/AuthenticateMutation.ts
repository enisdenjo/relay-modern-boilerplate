/**
 *
 * AuthenticateMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import environment from 'relay/environment';

// types
import {
  AuthenticateMutation,
  AuthenticateMutationVariables,
  AuthenticateMutationResponse,
} from 'artifacts/AuthenticateMutation.graphql';

const mutation = graphql`
  mutation AuthenticateMutation($input: AuthenticateInput!) {
    authenticate(input: $input) {
      jwtToken
    }
  }
`;

export { AuthenticateMutationVariables, AuthenticateMutationResponse };

export default (variables: AuthenticateMutationVariables) =>
  new Promise<AuthenticateMutationResponse>((resolve, reject) =>
    commitMutation<AuthenticateMutation>(environment, {
      mutation,
      variables,
      onCompleted: resolve,
      onError: reject,
    }),
  );
