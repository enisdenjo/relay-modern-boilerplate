/**
 *
 * relay/environment
 *
 * Environment used by Relay throughout the app.
 *
 */

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

// Customized fetch function for handling GraphQL requests.
const graphqlFetch = (operation, variables) => {
  console.log(operation);
  return fetch(
    // Here we include the `operation.operationKind` and `operation.name` only
    // because its easier to navigate through the GraphQL requests in the DevTools.
    // For example: `query TestQuery {...}` would look like this `GRAPHQL_ENDPOINT?query=TestQuery`.
    `/api/graphql?${operation.operationKind}=${operation.name}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // `operation.text` holds properly formatted GraphQL query.
        query: operation.text,
        // Variables used alongside the query/mutation.
        variables,
      }),
    },
  ).then(
    // Returning the JSON response Promise.
    (response) => response.json(),
  );
};

const environment = new Environment({
  // Network through which the Relay communication will be happening.
  network: Network.create(graphqlFetch),
  // The store where Relay is going to save all its records.
  store: new Store(new RecordSource()),
});

export default environment;
