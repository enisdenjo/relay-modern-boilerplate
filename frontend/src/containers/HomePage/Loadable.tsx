import React from 'react';

// components
import Loadable from 'react-loadable';
import Err from 'components/Err';
import Spinner from 'components/Spinner';

export default Loadable({
  loader: () => import('./index'),
  loading: ({ error, retry }) => (error ? <Err error={error} onRetry={retry} /> : <Spinner />),
});
