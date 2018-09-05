/**
 *
 * NotesTable
 *
 */

import * as React from 'react';
import { graphql, createFragmentContainer, RelayProp } from 'react-relay';

// types
import { NotesTable_query } from 'artifacts/NotesTable_query.graphql';

// mutations
import DeleteNoteMutation from 'relay/mutations/DeleteNoteMutation';

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
import { Link } from 'react-router-dom';

// decorate
import decorate, { Decorate } from './decorate';

export interface Props {
  query: NotesTable_query;
}

class NotesTable extends React.Component<Props & { relay: RelayProp } & Decorate> {
  private handleDelete = (id: string) => (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // so that the click does not propagate to row click
    DeleteNoteMutation({ where: { id } });
  };

  public render() {
    return (
      <Grid container>
        <Grid item xs>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell numeric>Todos</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.query.notesConnection.edges.map(
                  ({ node: { id, name, description, todos } }) => (
                    <TableRow key={id}>
                      <TableCell>
                        <Link to={`/notes/${id}`}>{name}</Link>
                      </TableCell>
                      <TableCell>{description}</TableCell>
                      <TableCell numeric>{todos.length}</TableCell>
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
  decorate(NotesTable),
  graphql`
    fragment NotesTable_query on Query {
      notesConnection(
        first: 2147483646 # max Prisma GraphQLInt
      ) @connection(key: "NotesTable_notesConnection", filters: []) {
        aggregate {
          count
        }
        edges {
          node {
            id
            name
            description
            todos {
              id
            }
          }
        }
      }
    }
  `,
);
