/**
 *
 * ArticlesPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import environment from 'relay/environment';

// types
import { ArticlesPageQueryResponse } from 'artifacts/ArticlesPageQuery.graphql';

// icons
import AddIcon from '@material-ui/icons/Add';

// containers
import { graphql, QueryRenderer, ReadyState } from 'react-relay';
import ArticlesTable from 'containers/ArticlesTable';
import ArticlePage from 'containers/ArticlePage/Loadable';

// components
import { Switch, Route, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Err from 'components/Err';
import Spinner from 'components/Spinner';

class ArticlesPage extends React.PureComponent<RouteComponentProps<{}>> {
  public render() {
    const { match } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ArticlesPageQuery {
            ...ArticlesTable_query
          }
        `}
        variables={{}}
        render={({ error, retry, props }: ReadyState<ArticlesPageQueryResponse>) => (
          <Switch>
            <Route exact path={`${match.path}/:id`} component={ArticlePage} />
            <Route
              exact
              path={match.path}
              render={() => {
                if (error) {
                  return <Err error={error} onRetry={retry} />;
                }

                if (!props) {
                  return <Spinner />;
                }

                return (
                  <Grid container direction="column" spacing={16}>
                    <Grid item container justify="space-between" alignItems="center">
                      <Grid item>
                        <Typography variant="title">Articles</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          color="primary"
                          component={({ children, ...rest }) => (
                            <Link {...rest as any} to={`${match.path}/create`}>
                              {children}
                            </Link>
                          )}
                        >
                          <AddIcon />
                          &nbsp;Create
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <ArticlesTable query={props} />
                    </Grid>
                  </Grid>
                );
              }}
            />
          </Switch>
        )}
      />
    );
  }
}

export default ArticlesPage;
