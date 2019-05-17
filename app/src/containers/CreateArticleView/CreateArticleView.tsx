/**
 *
 * CreateArticleView
 *
 */

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from 'relay/environment';

// types
import { CreateArticleViewQuery } from 'relay/artifacts/CreateArticleViewQuery.graphql';

// mutations
import CreateArticleMutation, {
  CreateArticleMutationResponse,
} from 'relay/mutations/CreateArticleMutation';

// components
import Err from 'components/Err';
import Spinner from 'components/Spinner';
import Form from 'components/Form';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export interface Props {
  onCreate?: (createArticle: CreateArticleMutationResponse['createArticle']) => void;
}

interface FormValues {
  title: string;
  content: string | null;
}

class CreateArticleView extends React.PureComponent<Props> {
  private handleSubmit = (query: CreateArticleViewQuery['response']) => async (
    values: FormValues,
  ) => {
    const { createArticle } = await CreateArticleMutation(
      {
        input: values,
      },
      {
        author: query.viewer!,
      },
    );

    const { onCreate } = this.props;
    if (onCreate) {
      onCreate(createArticle);
    }
  };

  public render() {
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
            <Form<FormValues>
              container
              direction="column"
              spacing={16}
              onSubmit={this.handleSubmit(props)}
            >
              {({ error: submitError }) => (
                <>
                  {submitError && (
                    <Grid item>
                      <Typography variant="body2">Something went wrong!</Typography>
                      <Typography color="error">{submitError.message}</Typography>
                    </Grid>
                  )}
                  <Grid item>
                    <TextField fullWidth required label="Title" name="title" autoFocus />
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
                </>
              )}
            </Form>
          );
        }}
      />
    );
  }
}

export default CreateArticleView;
