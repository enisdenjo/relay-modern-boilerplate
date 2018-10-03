/**
 *
 * relay/environment
 *
 * Reference: https://facebook.github.io/relay/docs/en/runtime-architecture.html#data-types
 *
 */

import { Environment, RecordSource, Store } from 'relay-runtime';
import 'regenerator-runtime/runtime';
import { RelayNetworkLayer, urlMiddleware } from 'react-relay-network-modern';

// A collection of records keyed by their data ID, used both to represent the cache and updates to it.
const recordSource = new RecordSource();

// The source of truth for an instance of `RelayRuntime`, holding the canonical set of records in the form of a `RecordSource`.
const store = new Store(recordSource);

// Provides methods for fetching query data from and executing mutations against an external data source.
const network = new RelayNetworkLayer([
  urlMiddleware({
    url: ({ operation }) =>
      Promise.resolve(`/api/graphql?${operation.operationKind}=${operation.name}`),
  }),
]);

// Environment providing a high-level API for interacting with both the `Store` and the `Network`.
const environment = new Environment({
  store,
  network,
});

export default environment;
