/**
 *
 * Protected
 *
 */

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from 'relay/environment';

// types
import { ProtectedQuery } from 'artifacts/ProtectedQuery.graphql';

// mutations
import AuthenticateMutation from 'relay/mutations/AuthenticateMutation';

// components
import Err from 'components/Err';
import Spinner from 'components/Spinner';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// decorate
import decorate, { Decorate } from './decorate';

export interface Props {
  /** component to render after the user has authenticated */
  children: (
    viewer: ProtectedQuery['response']['viewer'],
    logout: () => void,
  ) => React.ReactElement<any>;
}

interface State {
  loginError: Error | null;
}

class Protected extends React.PureComponent<Props & Decorate, State> {
  public state: State = {
    loginError: null,
  };

  private handleLogin = (retryQuery: () => void): React.FormEventHandler<HTMLFormElement> => async (
    event,
  ) => {
    event.preventDefault();

    const { currentTarget: form } = event;

    const email: string = form.elements['email'].value;
    const password: string = form.elements['password'].value;

    try {
      this.setState({ loginError: null });
      const {
        authenticate: { jwtToken },
      } = await AuthenticateMutation({ input: { email, password } });

      // set the token
      localStorage.setItem('token', jwtToken);
      // re-fetch the viewer query
      retryQuery();
    } catch (error) {
      this.setState({ loginError: error });
      form.reset();
    }
  };

  private handleLogout = (retryQuery: () => void) => () => {
    // remove the token
    localStorage.removeItem('token');
    // re-fetch the viewer query
    retryQuery();
  };

  public render() {
    const { classes, children } = this.props;
    const { loginError } = this.state;

    return (
      <QueryRenderer<ProtectedQuery>
        environment={environment}
        query={graphql`
          query ProtectedQuery {
            viewer {
              id
              firstName
              lastName
            }
          }
        `}
        variables={{}}
        render={({ props, error, retry }) => {
          if (error) {
            return (
              <Err
                error={error}
                // if an error occures here it means that
                // the auth is failing for any reason
                onRetry={this.handleLogout(retry)}
              />
            );
          }

          if (!props) {
            return <Spinner />;
          }

          if (!props.viewer) {
            return (
              <Grid
                container
                spacing={16}
                className={classes.root}
                direction="column"
                component="form"
                onSubmit={this.handleLogin(retry)}
              >
                <Grid item>
                  <Typography variant="display1">Login</Typography>
                </Grid>
                {loginError && (
                  <Grid item>
                    <Typography color="error">{loginError.message}</Typography>
                  </Grid>
                )}
                <Grid item>
                  <TextField
                    fullWidth
                    name="email"
                    label="E-Mail"
                    required
                    type="email"
                    autoFocus
                  />
                </Grid>
                <Grid item>
                  <TextField fullWidth name="password" label="Password" required type="password" />
                </Grid>
                <Grid item container justify="flex-end">
                  <Grid item>
                    <Button type="submit" variant="raised" color="primary">
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            );
          }

          return children(props.viewer, this.handleLogout(retry));
        }}
      />
    );
  }
}

export default decorate(Protected);
