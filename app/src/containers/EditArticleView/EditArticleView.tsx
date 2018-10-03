/**
 *
 * EditArticleView
 *
 */

import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from 'relay/environment';

// types
// import { EditArticleViewQuery } from 'artifacts/EditArticleViewQuery.graphql';
type EditArticleViewQuery = any;

// mutations
import UpdateArticleMutation from 'relay/mutations/UpdateArticleMutation';

// components
import Err from 'components/Err';
import Spinner from 'components/Spinner';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

export interface Props {
  id: string;
}

interface State {
  submitError: Error | null;
}

class EditArticleView extends React.PureComponent<Props, State> {
  public state = {
    submitError: null,
  };

  private handleSubmit = (query: EditArticleViewQuery['response']) => async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const { currentTarget: form } = event;

    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const content = (form.elements.namedItem('content') as HTMLInputElement).value;
    const authorId = (form.elements.namedItem('authorId') as HTMLInputElement).value;

    this.setState({ submitError: null });
    try {
      await UpdateArticleMutation(
        {
          where: { id: this.props.id },
          data: {
            title,
            content,
            author: {
              connect: {
                id: authorId,
              },
            },
          },
        },
        {
          author: query.users.find((user) => user.id === authorId),
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
        // query={graphql`
        //   query EditArticleViewQuery($where: ArticleWhereUniqueInput!) {
        //     users {
        //       id
        //       email
        //       fullName
        //     }
        //     article(where: $where) {
        //       id
        //       author {
        //         id
        //         email
        //         fullName
        //       }
        //       title
        //       content
        //     }
        //   }
        // `}
        variables={{ where: { id } }}
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
                <FormControl fullWidth required>
                  <InputLabel>Author</InputLabel>
                  <Select native defaultValue={props.article.author.id} name="authorId">
                    {props.users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.fullName}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
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
                  defaultValue={props.article.content}
                  required
                  multiline
                  label="Content"
                  name="content"
                />
              </Grid>
              <Grid item container justify="flex-end">
                <Grid item>
                  <Button color="primary" variant="raised" type="submit">
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
