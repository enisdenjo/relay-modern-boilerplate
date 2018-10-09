/**
 *
 * NotFound
 *
 */

import React from 'react';

// components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const NotFound: React.SFC = () => (
  <Grid container direction="column" alignItems="center" justify="center">
    <Grid item>
      <Typography variant="h6" color="textSecondary">
        404
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="subtitle1" color="textSecondary">
        Not Found
      </Typography>
    </Grid>
  </Grid>
);

export default NotFound;
