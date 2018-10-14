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

// icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// containers
import { Switch, Route } from 'react-router-dom';
import Protected from 'containers/Protected';

// components
import Err from 'components/Err';
import { makeLoadable } from 'components/Loadable';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

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

  public componentDidCatch(error: Error) {
    this.setState({ error });
  }

  public render() {
    const { error } = this.state;
    const { classes } = this.props;

    if (error) {
      return (
        <div className={classes.root}>
          <Err error={error} onRetry={() => this.setState({ error: null })} />
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <Grid container direction="column" spacing={40}>
          <Grid item container direction="column" alignItems="center" justify="center">
            <Grid item container spacing={16} alignItems="center" justify="center">
              <Grid item>
                <img src={RelayLogo} style={{ height: '4rem' }} />
              </Grid>
              <Grid item>
                <Typography variant="h5" color="primary" noWrap>
                  Relay Modern Boilerplate
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="textSecondary">
                <a href="https://www.docker.com/">Docker</a>
                &nbsp;+&nbsp;
                <a href="https://www.postgresql.org/">Postgres</a>
                &nbsp;+&nbsp;
                <a href="https://www.graphile.org/postgraphile/">PostGraphile</a>
                &nbsp;+&nbsp;
                <a href="https://webpack.js.org/">Webpack</a>
                &nbsp;+&nbsp;
                <a href="https://reactjs.org/">React</a>
                &nbsp;+&nbsp;
                <a href="https://www.typescriptlang.org/">TypeScript</a>
                &nbsp;+&nbsp;
                <a href="http://facebook.github.io/relay/docs/en/thinking-in-relay.html">
                  Relay Modern
                </a>
                &nbsp;=&nbsp;
                <strong>Awesomeness</strong>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify="center">
            <Protected>
              {(viewer, logout) => (
                <Grid container direction="column" spacing={8}>
                  <Grid item container alignItems="center" justify="flex-end" spacing={8}>
                    <Grid item>
                      <Typography variant="subtitle1" color="secondary">
                        Welcome <strong>{viewer.fullName}</strong>!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton onClick={logout} color="secondary">
                        <ExitToAppIcon />
                      </IconButton>
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
              )}
            </Protected>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default decorate(Root);
