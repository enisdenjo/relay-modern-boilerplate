/**
 *
 * Article
 *
 */

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

// types
import { Article_article } from 'artifacts/Article_article.graphql';

// icons
import EditIcon from '@material-ui/icons/Edit';

// container
import EditArticleView from 'containers/EditArticleView';

// components
import { Link } from 'react-router-dom';
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
}

class Article extends React.PureComponent<Props, State> {
  public state = {
    editDialogOpen: false,
  };

  private toggleEditDialog = () =>
    this.setState(({ editDialogOpen }) => ({ editDialogOpen: !editDialogOpen }));

  public render() {
    const { article } = this.props;
    const { editDialogOpen } = this.state;

    return (
      <>
        <Dialog open={editDialogOpen} onClose={this.toggleEditDialog}>
          <DialogTitle>Edit {article.title}</DialogTitle>
          <DialogContent style={{ minWidth: 512 }}>
            <EditArticleView id={article.id} />
          </DialogContent>
        </Dialog>
        <Grid container direction="column" spacing={16}>
          <Grid item container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="title">{article.title}</Typography>
              <Typography variant="subheading" color="textSecondary">
                by <Link to={`/user/${article.author.id}`}>{article.author.fullName}</Link>
              </Typography>
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
          <Grid item>
            <Typography variant="subheading" />
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
      createdAt
      title
      content
      author {
        id
        fullName
        email
      }
    }
  `,
);
