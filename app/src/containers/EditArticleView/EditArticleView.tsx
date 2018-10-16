/**
 *
 * EditArticleView
 *
 */

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from 'relay/environment';

// types
import { EditArticleViewQuery } from 'artifacts/EditArticleViewQuery.graphql';

// mutations
import UpdateArticleMutation from 'relay/mutations/UpdateArticleMutation';

// components
import Form from 'components/Form';
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

interface FormValues {
  title: string;
  content: string;
}

class EditArticleView extends React.PureComponent<Props> {
  private handleSubmit = ({ article }: EditArticleViewQuery['response']) => ({
    title,
    content,
  }: FormValues) =>
    UpdateArticleMutation(
      {
        input: {
          rowId: article!.rowId,
          title,
          content,
        },
      },
      {
        id: article!.id,
      },
    );

  public render() {
    const { id } = this.props;

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
                      <Typography variant="caption">Something went wrong!</Typography>
                      <Typography color="error">{submitError.message}</Typography>
                    </Grid>
                  )}
                  <Grid item>
                    <TextField
                      fullWidth
                      defaultValue={props.article!.title}
                      required
                      label="Title"
                      name="title"
                      autoFocus
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      defaultValue={props.article!.content || ''}
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
                </>
              )}
            </Form>
          );
        }}
      />
    );
  }
}

export default EditArticleView;
