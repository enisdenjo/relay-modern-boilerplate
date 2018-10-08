/**
 *
 * CreateArticleView
 *
 */

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from 'relay/environment';

// types
import { CreateArticleViewQuery } from 'artifacts/CreateArticleViewQuery.graphql';

// mutations
import CreateArticleMutation, {
  CreateArticleMutationResponse,
} from 'relay/mutations/CreateArticleMutation';

// components
import Err from 'components/Err';
import Spinner from 'components/Spinner';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export interface Props {
  onCreate?: (
    createdArticle: CreateArticleMutationResponse['createArticle']['articleEdge']['node'],
  ) => void;
}

interface State {
  submitError: Error | null;
}

class CreateArticleView extends React.PureComponent<Props, State> {
  public state = {
    submitError: null,
  };

  private handleSubmit = (query: CreateArticleViewQuery['response']) => async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const { currentTarget: form } = event;

    const title: string = form.elements['title'].value;
    const content: string = form.elements['content'].value;

    this.setState({ submitError: null });
    try {
      const {
        createArticle: {
          articleEdge: { node },
        },
      } = await CreateArticleMutation(
        {
          input: {
            title,
            content,
          },
        },
        {
          author: query.viewer,
        },
      );

      const { onCreate } = this.props;
      if (onCreate) {
        onCreate(node);
      }
    } catch (error) {
      form.reset();
      this.setState({ submitError: error });
    }
  };

  public render() {
    const { submitError } = this.state;

    return (
      <QueryRenderer<CreateArticleViewQuery>
        environment={environment}
        query={graphql`
          query CreateArticleViewQuery {
            viewer {
              id
              fullName
            }
          }
        `}
        variables={{}}
        render={({ error, retry, props }) => {
          if (error) {
            return <Err error={error} onRetry={retry} />;
          }
          if (!props) {
            return <Spinner />;
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
                  <Typography variant="body2">Something went wrong!</Typography>
                  <Typography color="error">{submitError.message}</Typography>
                </Grid>
              )}
              <Grid item>
                <TextField fullWidth required label="Title" name="title" />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={3}
                  variant="outlined"
                  label="Content"
                  name="content"
                />
              </Grid>
              <Grid item container justify="flex-end">
                <Grid item>
                  <Button color="primary" variant="contained" type="submit">
                    Add
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

export default CreateArticleView;
