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
import ArticlesList from 'containers/ArticlesList';
import ArticlePage from 'containers/ArticlePage/Loadable';
import AddArticleView from 'containers/AddArticleView';

// components
import { Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Err from 'components/Err';
import Spinner from 'components/Spinner';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

// constants
const ARTICLES_LIST_PAGE_SIZE = 5;

interface State {
  addArticleDialogOpen: boolean;
}

class ArticlesPage extends React.PureComponent<RouteComponentProps<{}>, State> {
  public state = {
    addArticleDialogOpen: false,
  };

  private toggleAddArticleDialog = () =>
    this.setState(({ addArticleDialogOpen }) => ({ addArticleDialogOpen: !addArticleDialogOpen }));

  public render() {
    const { match } = this.props;
    const { addArticleDialogOpen } = this.state;

    return (
      <>
        <Dialog open={addArticleDialogOpen} onClose={this.toggleAddArticleDialog}>
          <DialogTitle>Add article</DialogTitle>
          <DialogContent style={{ minWidth: 512 }}>
            <AddArticleView />
          </DialogContent>
        </Dialog>
        <QueryRenderer<ArticlesPageQuery>
          environment={environment}
          query={graphql`
            query ArticlesPageQuery($count: Int!) {
              ...ArticlesList_query @arguments(count: $count)
            }
          `}
          variables={{ count: ARTICLES_LIST_PAGE_SIZE }}
          render={({ error, retry, props }) => (
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
                        <ArticlesList pageSize={ARTICLES_LIST_PAGE_SIZE} query={props} />
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
