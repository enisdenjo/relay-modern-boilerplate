/**
 *
 * Err
 *
 * Component used for displaying errors.
 *
 */

import * as React from 'react';

// components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export interface Props {
  error: Error;
  onRetry?: () => void;
}

const Err: React.SFC<Props> = ({ error, onRetry }) => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    spacing={16}
    style={{ padding: 16 }}
  >
    <Grid item>
      <Typography variant="body2" color="error">
        {error.message}
      </Typography>
    </Grid>
    <Grid item>
      <Button variant="outlined" color="primary" onClick={onRetry}>
        Retry
      </Button>
    </Grid>
  </Grid>
);

export default Err;
