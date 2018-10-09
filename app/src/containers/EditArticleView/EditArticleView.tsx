/**
 *
 * EditArticleView
 *
 */

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from 'relay/environment';
import { extractFormValues } from 'utils';

// types
import { EditArticleViewQuery } from 'artifacts/EditArticleViewQuery.graphql';

// mutations
import UpdateArticleMutation from 'relay/mutations/UpdateArticleMutation';

// components
import Err from 'components/Err';
import Spinner from 'components/Spinner';
import NotFound from 'components/NotFound';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export interface Props {
  id: string;
}

interface State {
  submitError: Error | null;
}

class EditArticleView extends React.PureComponent<Props, State> {
  public state: State = {
    submitError: null,
  };

  private handleSubmit = (query: EditArticleViewQuery['response']) => async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const { currentTarget: form } = event;

    const values = extractFormValues<{ title: string; content: string }>(form);

    this.setState({ submitError: null });
    try {
      await UpdateArticleMutation(
        {
          input: {
            rowId: query.article!.rowId,
            title: values.title,
            content: values.content,
          },
        },
        {
          id: query.article!.id,
        },
      );
    } catch (error) {
      form.reset();
      this.setState({ submitError: error });
    }
  };

  public render() {
    const { id } = this.props;
    const { submitError } = this.state;

    return (
      <QueryRenderer<EditArticleViewQuery>
        environment={environment}
        query={graphql`
          query EditArticleViewQuery($id: ID!) {
            article(id: $id) {
              id
              rowId
              author {
                id
                email
                fullName
              }
              title
              content
            }
          }
        `}
        variables={{ id }}
        render={({ error, retry, props }) => {
          if (error) {
            return <Err error={error} onRetry={retry} />;
          }
          if (!props) {
            return <Spinner />;
          }
          if (!props.article) {
            return <NotFound />;
          }

          return (
            <Grid
              container
              direction="column"
              spacing={16}
              component="form"
              onSubmit={this.handleSubmit(props)}
            >
              {submitError && (
                <Grid item>
                  <Typography variant="caption">Something went wrong!</Typography>
                  <Typography color="error">{submitError.message}</Typography>
                </Grid>
              )}
              <Grid item>
                <TextField
                  fullWidth
                  defaultValue={props.article.title}
                  required
                  label="Title"
                  name="title"
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  defaultValue={props.article.content || ''}
                  required
                  multiline
                  rows={3}
                  label="Content"
                  name="content"
                  variant="outlined"
                />
              </Grid>
              <Grid item container justify="flex-end">
                <Grid item>
                  <Button color="primary" variant="contained" type="submit">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          );
        }}
      />
    );
  }
}

export default EditArticleView;
