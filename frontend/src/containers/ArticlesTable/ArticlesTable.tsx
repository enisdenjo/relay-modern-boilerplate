/**
 *
 * ArticlesTable
 *
 */

import React from 'react';
import { graphql, createFragmentContainer, RelayProp } from 'react-relay';

// types
import { ArticlesTable_query } from 'artifacts/ArticlesTable_query.graphql';

// mutations
import DeleteArticleMutation from 'relay/mutations/DeleteArticleMutation';

// icons
import DeleteIcon from '@material-ui/icons/Delete';

// components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

// decorate
import decorate, { Decorate } from './decorate';

export interface Props {
  query: ArticlesTable_query;
}

class ArticlesTable extends React.Component<Props & { relay: RelayProp } & Decorate> {
  private handleDelete = (id: string) => () => DeleteArticleMutation({ where: { id } });

  public render() {
    return (
      <Grid container>
        <Grid item xs>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Author</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Content</TableCell>
                  <TableCell numeric>Comments</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.query.articlesConnection.edges.map(
                  ({
                    node: {
                      id,
                      author: { fullName },
                      title,
                      content,
                      comments,
                    },
                  }) => (
                    <TableRow key={id}>
                      <TableCell>{fullName}</TableCell>
                      <TableCell>
                        <Link to={`/articles/${id}`}>{title}</Link>
                      </TableCell>
                      <TableCell>
                        <Typography noWrap style={{ maxWidth: 256 }}>
                          {content}
                        </Typography>
                      </TableCell>
                      <TableCell numeric>{comments.length}</TableCell>
                      <TableCell>
                        <IconButton onClick={this.handleDelete(id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default createFragmentContainer(
  decorate(ArticlesTable),
  graphql`
    fragment ArticlesTable_query on Query {
      articlesConnection(
        first: 2147483646 # max Prisma GraphQLInt
      ) @connection(key: "ArticlesTable_articlesConnection", filters: []) {
        aggregate {
          count
        }
        edges {
          node {
            id
            title
            content
            author {
              id
              fullName
            }
            comments {
              id
            }
          }
        }
      }
    }
  `,
);
