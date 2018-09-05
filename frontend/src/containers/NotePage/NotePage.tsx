/**
 *
 * NotePage
 *
 */

import * as React from 'react';
import environment from 'relay/environment';

// types
import { RouteComponentProps } from 'react-router-dom';
import { NotePageQueryResponse } from 'artifacts/NotePageQuery.graphql';

// containers
import { graphql, QueryRenderer, ReadyState } from 'react-relay';

// components
import Err from 'components/Err';
import Spinner from 'components/Spinner';

class NotePage extends React.Component<RouteComponentProps<{ id: string }>> {
  public render() {
    const { match } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query NotePageQuery($where: NoteWhereUniqueInput!) {
            note(where: $where) {
              id
              name
              todos {
                id
                done
                name
              }
            }
          }
        `}
        variables={{ where: { id: match.params.id } }}
        render={({ error, retry, props }: ReadyState<NotePageQueryResponse>) => {
          if (error) {
            return <Err error={error} onRetry={retry} />;
          }

          if (!props) {
            return <Spinner />;
          }

          return (
            <pre>
              <code>{JSON.stringify(props, undefined, '  ')}</code>
            </pre>
          );
        }}
      />
    );
  }
}

export default NotePage;
