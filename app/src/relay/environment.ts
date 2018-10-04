/**
 *
 * relay/environment
 *
 * Reference: https://facebook.github.io/relay/docs/en/runtime-architecture.html#data-types
 *
 */

import { Network, Environment, RecordSource, Store } from 'relay-runtime';

// A collection of records keyed by their data ID, used both to represent the cache and updates to it.
const recordSource = new RecordSource();

// The source of truth for an instance of `RelayRuntime`, holding the canonical set of records in the form of a `RecordSource`.
const store = new Store(recordSource);

// Provides methods for fetching query data from and executing mutations against an external data source.
const network = Network.create(async (operation, variables) => {
  // prepare headers
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  // get token and set header if the token exists
  const token = localStorage.getItem('token');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  // Fetch function for handling GraphQL requests.
  const response = await fetch(
    // Here we include the `operation.operationKind` and `operation.name` only
    // because its easier to navigate through the GraphQL requests in the DevTools.
    // For example: `query TestQuery {...}` URL would end like this: `GRAPHQL_ENDPOINT?query=TestQuery`.
    `/api/graphql?${operation.operationKind}=${operation.name}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        // `operation.text` holds properly formatted GraphQL query.
        query: operation.text,
        // Variables used alongside the query/mutation.
        variables,
      }),
    },
  );

  // check for errors
  const data = await response.json();
  if (data.errors) {
    const messages: string[] = data.errors.map(({ message }) => message);
    throw new Error(messages.join(', '));
  }

  return data;
});

// Environment providing a high-level API for interacting with both the `Store` and the `Network`.
const environment = new Environment({
  store,
  network,
});

export default environment;
