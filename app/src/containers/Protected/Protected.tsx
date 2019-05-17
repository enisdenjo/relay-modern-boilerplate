/**
 *
 * Protected
 *
 */

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from 'relay/environment';

// types
import { ProtectedQuery } from 'relay/artifacts/ProtectedQuery.graphql';

// mutations
import AuthenticateMutation from 'relay/mutations/AuthenticateMutation';

// components
import Err from 'components/Err';
import Spinner from 'components/Spinner';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Form from 'components/Form';
import CircularProgress from '@material-ui/core/CircularProgress';

// decorate
import decorate, { Decorate } from './decorate';

export interface Props {
  /** component to render after the user has authenticated */
  children: (
    viewer: NonNullable<ProtectedQuery['response']['viewer']>,
    logout: () => void,
  ) => React.ReactElement<any>;
}

interface FormValues {
  email: string;
  password: string;
}

class Protected extends React.PureComponent<Props & Decorate> {
  private handleLogin = (retryQuery?: () => void) => async (values: FormValues) => {
    const { authenticate } = await AuthenticateMutation({ input: values });
    // set the token
    localStorage.setItem('token', authenticate!.jwtToken);
    // re-fetch the viewer query
    if (retryQuery) {
      retryQuery();
    }
  };

  private handleLogout = (retryQuery?: () => void) => () => {
    // remove the token
    localStorage.removeItem('token');
    // re-fetch the viewer query
    if (retryQuery) {
      retryQuery();
    }
  };

  public render() {
    const { classes, children } = this.props;

    return (
      <QueryRenderer<ProtectedQuery>
        environment={environment}
        query={graphql`
          query ProtectedQuery {
            viewer {
              id
              fullName
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
              <Form<FormValues>
                container
                spacing={16}
                className={classes.root}
                direction="column"
                onSubmit={this.handleLogin(retry)}
                resetOnError={['password']}
              >
                {({ error: submitError, submitting }) => (
                  <>
                    <Grid item>
                      <Typography variant="h4">Login</Typography>
                    </Grid>
                    {submitError && (
                      <Grid item>
                        <Typography variant="caption">Something went wrong!</Typography>
                        <Typography color="error">{submitError.message}</Typography>
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
                      <TextField
                        fullWidth
                        name="password"
                        label="Password"
                        required
                        type="password"
                      />
                    </Grid>
                    <Grid item container justify="flex-end" spacing={16}>
                      <Grid item>
                        <Button variant="text" color="primary" disabled>
                          Register
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={submitting}
                          color="primary"
                        >
                          Login
                          {submitting && (
                            <CircularProgress
                              size="1rem"
                              style={{
                                position: 'absolute',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                left: 0,
                                right: 0,
                              }}
                            />
                          )}
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Form>
            );
          }

          return children(props.viewer, this.handleLogout(retry));
        }}
      />
    );
  }
}

export default decorate(Protected);
