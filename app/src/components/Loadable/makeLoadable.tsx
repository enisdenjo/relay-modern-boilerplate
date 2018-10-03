/**
 *
 * Loadable/makeLoadable
 *
 * Creates a `Loadable` component for the passed path.
 *
 */

import React from 'react';

// components
import Loadable from 'react-loadable';
import Err from 'components/Err';
import Spinner from 'components/Spinner';

/** Makes a <Loadable /> wrapping the passed component. The `component` must be an `import()` statement. */
const makeLoadable = (component: Promise<any>) =>
  Loadable({
    loader: () => component,
    loading: ({ error, retry }) => (error ? <Err error={error} onRetry={retry} /> : <Spinner />),
  });

export default makeLoadable;
