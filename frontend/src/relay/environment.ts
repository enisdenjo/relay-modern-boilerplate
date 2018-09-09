/**
 *
 * relay/environment
 *
 * Reference: https://facebook.github.io/relay/docs/en/runtime-architecture.html#data-types
 *
 */

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

// A collection of records keyed by their data ID, used both to represent the cache and updates to it.
const recordSource = new RecordSource();

// The source of truth for an instance of `RelayRuntime`, holding the canonical set of records in the form of a `RecordSource`.
const store = new Store(recordSource);

// Provides methods for fetching query data from and executing mutations against an external data source.
const network = Network.create((operation, variables) =>
  // Fetch function for handling GraphQL requests.
  fetch(
    // Here we include the `operation.operationKind` and `operation.name` only
    // because its easier to navigate through the GraphQL requests in the DevTools.
    // For example: `query TestQuery {...}` URL would end like this: `GRAPHQL_ENDPOINT?query=TestQuery`.
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
  ),
);

// Environment providing a high-level API for interacting with both the `Store` and the `Network`.
const environment = new Environment({
  store,
  network,
});

export default environment;
