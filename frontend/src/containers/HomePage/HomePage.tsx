/**
 *
 * HomePage
 *
 */

import React from 'react';

// types
import { RouteComponentProps } from 'react-router-dom';

// components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class HomePage extends React.Component<RouteComponentProps<{}>> {
  public render() {
    return (
      <Grid container justify="center">
        <Grid item>
          <Typography variant="title">Hello world!</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
