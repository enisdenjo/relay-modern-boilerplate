/**
 *
 * ArticlesPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import environment from 'relay/environment';

// types
import { ArticlesPageQuery } from 'artifacts/ArticlesPageQuery.graphql';

// icons
import AddIcon from '@material-ui/icons/Add';

// containers
import { graphql, QueryRenderer } from 'react-relay';
// import ArticlesList from 'containers/ArticlesList';
import CreateArticleView from 'containers/CreateArticleView';

// components
import { makeLoadable } from 'components/Loadable';
import { Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Err from 'components/Err';
import Spinner from 'components/Spinner';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

// pages
const LoadableArticlePage = makeLoadable(() => import('containers/ArticlePage'));

// constants
const ARTICLES_LIST_PAGE_SIZE = 5;

interface State {
  createArticleDialogOpen: boolean;
}

class ArticlesPage extends React.PureComponent<RouteComponentProps<{}>, State> {
  public state = {
    createArticleDialogOpen: false,
  };

  private toggleAddArticleDialog = () =>
    this.setState(({ createArticleDialogOpen }) => ({
      createArticleDialogOpen: !createArticleDialogOpen,
    }));

  public render() {
    const { match } = this.props;
    const { createArticleDialogOpen } = this.state;

    return (
      <>
        <Dialog open={createArticleDialogOpen} onClose={this.toggleAddArticleDialog}>
          <DialogTitle>Create article</DialogTitle>
          <DialogContent style={{ minWidth: 512 }}>
            <CreateArticleView />
          </DialogContent>
        </Dialog>
        <QueryRenderer<ArticlesPageQuery>
          environment={environment}
          query={graphql`
            query ArticlesPageQuery {
              query {
                allArticles {
                  nodes {
                    id
                  }
                }
              }
            }
          `}
          variables={{ count: ARTICLES_LIST_PAGE_SIZE }}
          render={({ error, retry, props }) => (
            <Switch>
              <Route exact path={`${match.path}/:id`} component={LoadableArticlePage} />
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
                          <Typography variant="display1">Articles</Typography>
                        </Grid>
                        <Grid item>
                          <Button color="primary" onClick={this.toggleAddArticleDialog}>
                            <AddIcon />
                            &nbsp;Create
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item>
                        lele
                        {/* <ArticlesList pageSize={ARTICLES_LIST_PAGE_SIZE} query={props} /> */}
                      </Grid>
                    </Grid>
                  );
                }}
              />
            </Switch>
          )}
        />
      </>
    );
  }
}

export default ArticlesPage;
