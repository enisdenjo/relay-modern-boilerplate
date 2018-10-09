/**
 *
 * Article
 *
 */

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

// types
import { Article_article } from 'artifacts/Article_article.graphql';

// mutations
import DeleteArticleMutation from 'relay/mutations/DeleteArticleMutation';

// icons
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// container
import EditArticleView from 'containers/EditArticleView';

// components
import { Link, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

export interface Props {
  article: Article_article;
}

interface State {
  editDialogOpen: boolean;
  deleted: boolean;
}

class Article extends React.PureComponent<Props, State> {
  public state = {
    editDialogOpen: false,
    deleted: false,
  };

  private toggleEditDialog = () =>
    this.setState(({ editDialogOpen }) => ({ editDialogOpen: !editDialogOpen }));

  private deleteArticle = async () => {
    const { article } = this.props;
    await DeleteArticleMutation({ input: { rowId: article.rowId } }, { id: article.id });
    this.setState({ deleted: true });
  };

  public render() {
    const { article } = this.props;
    const { deleted, editDialogOpen } = this.state;

    if (deleted) {
      return <Redirect to="/articles" />;
    }

    return (
      <>
        <Dialog open={editDialogOpen} onClose={this.toggleEditDialog} maxWidth="md" fullWidth>
          <DialogTitle>Edit {article.title}</DialogTitle>
          <DialogContent>
            <EditArticleView id={article.id} />
          </DialogContent>
        </Dialog>
        <Grid container direction="column" spacing={16}>
          <Grid item container alignItems="center">
            <Grid item>
              <Typography variant="h5">{article.title}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                by <Link to={`/user/${article.author.id}`}>{article.author.fullName}</Link>
              </Typography>
            </Grid>
            <Grid item xs />
            <Grid item>
              <IconButton onClick={this.deleteArticle} color="secondary">
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={this.toggleEditDialog} color="primary">
                <EditIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>{article.content}</Typography>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default createFragmentContainer(
  Article,
  graphql`
    fragment Article_article on Article {
      id
      rowId
      title
      content
      createdAt
      author {
        id
        fullName
        email
      }
    }
  `,
);
