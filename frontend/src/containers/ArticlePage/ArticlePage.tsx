/**
 *
 * ArticlePage
 *
 */

import * as React from 'react';
import environment from 'relay/environment';

// types
import { RouteComponentProps } from 'react-router-dom';
import { ArticlePageQueryResponse } from 'artifacts/ArticlePageQuery.graphql';

// containers
import { graphql, QueryRenderer, ReadyState } from 'react-relay';

// components
import Err from 'components/Err';
import Spinner from 'components/Spinner';

class ArticlePage extends React.Component<RouteComponentProps<{ id: string }>> {
  public render() {
    const { match } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ArticlePageQuery($where: ArticleWhereUniqueInput!) {
            article(where: $where) {
              id
              title
              content
              author {
                id
                email
                fullName
              }
              comments {
                id
              }
            }
          }
        `}
        variables={{ where: { id: match.params.id } }}
        render={({ error, retry, props }: ReadyState<ArticlePageQueryResponse>) => {
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

export default ArticlePage;
