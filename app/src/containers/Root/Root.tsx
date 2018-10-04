/**
 *
 * Root
 *
 * The Root component, first component mounted.
 *
 */

import React from 'react';

// assets
import RelayLogo from 'assets/relay-logo.svg';

// containers
import { Switch, Route } from 'react-router-dom';

// components
import { makeLoadable } from 'components/Loadable';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Err from 'components/Err';

// pages
const LoadableHomePage = makeLoadable(() => import('containers/HomePage'));
const LoadableArticlesPage = makeLoadable(() => import('containers/ArticlesPage'));

// decorate
import decorate, { Decorate } from './decorate';

interface State {
  error: Error | null;
}

class Root extends React.Component<Decorate, State> {
  public state: State = {
    error: null,
  };

  public componentDidCatch(error) {
    this.setState({ error });
  }

  public render() {
    const { error } = this.state;

    if (error) {
      return <Err error={error} onRetry={() => this.setState({ error: null })} />;
    }

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container direction="column" spacing={32}>
          <Grid item container direction="column" alignItems="center" justify="center">
            <Grid item container spacing={16} alignItems="center" justify="center">
              <Grid item>
                <img src={RelayLogo} style={{ height: '4rem' }} />
              </Grid>
              <Grid item>
                <Typography variant="headline" color="primary" noWrap>
                  Relay Modern Boilerplate
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subheading" color="textSecondary">
                Educational application serving as a Relay Modern crash course.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container className={classes.pageContainer}>
              <Switch>
                <Route path="/articles" component={LoadableArticlesPage} />
                <Route exact path="/" component={LoadableHomePage} />
              </Switch>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default decorate(Root);
