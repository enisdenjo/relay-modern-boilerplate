/**
 *
 * Spinner
 *
 * Component used as a loading state placeholder.
 *
 */

import * as React from 'react';

// components
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner: React.SFC = () => (
  <Grid container justify="center">
    <Grid item>
      <CircularProgress />
    </Grid>
  </Grid>
);

export default Spinner;
