/**
 *
 * ArticlesList
 *
 */

import React from 'react';
import { RelayPaginationProp } from 'react-relay';

// types
// import { ArticlesList_query } from 'artifacts/ArticlesList_query.graphql';

// components
import Err from 'components/Err';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export interface Props {
  pageSize: number;
  query: any; // ArticlesList_query
}

interface State {
  loadMoreError: Error | null;
}

class ArticlesList extends React.Component<Props & { relay: RelayPaginationProp }, State> {
  private dateTimeFormatter = new Intl.DateTimeFormat('de');

  public state = {
    loadMoreError: null,
  };

  private retryLoadMore = () => this.setState({ loadMoreError: null }, this.loadMore);

  private loadMore = () => {
    const { relay, pageSize } = this.props;
    relay.loadMore(pageSize, (error) => {
      if (error) {
        this.setState({ loadMoreError: error });
      }
    });
  };

  public render() {
    const { relay, query } = this.props;
    const { loadMoreError } = this.state;

    return (
      <Grid container direction="column" spacing={16}>
        {query.articlesConnection.edges.map(
          ({ node: { id, createdAt, author, title, content } }) => (
            <Grid key={id} item>
              <Card>
                <CardContent>
                  <Grid container direction="column" spacing={16}>
                    <Grid item>
                      <Typography variant="headline">
                        <Link to={`/articles/${id}`}>{title}</Link>
                      </Typography>
                      <Typography variant="subheading" color="textSecondary">
                        by <Link to={`/user/${author.id}`}>{author.fullName}</Link>
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {this.dateTimeFormatter.format(new Date(createdAt))}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{content}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ),
        )}
        {relay.hasMore() &&
          (loadMoreError ? (
            <Grid item>
              <Err error={loadMoreError} onRetry={this.retryLoadMore} />
            </Grid>
          ) : (
            <Grid item container justify="center">
              <Grid item>
                <Button color="primary" variant="outlined" onClick={this.loadMore}>
                  Load more
                </Button>
              </Grid>
            </Grid>
          ))}
      </Grid>
    );
  }
}

export default ArticlesList;
// export default createPaginationContainer(
//   ArticlesList,
//   // graphql`
//   //   fragment ArticlesList_query on Query
//   //     @argumentDefinitions(cursor: { type: "String" }, count: { type: "Int!" }) {
//   //     articlesConnection(first: $count, after: $cursor)
//   //       @connection(key: "ArticlesList_articlesConnection", filters: []) {
//   //       aggregate {
//   //         count
//   //       }
//   //       edges {
//   //         node {
//   //           id
//   //           title
//   //           content
//   //           createdAt
//   //           author {
//   //             id
//   //             fullName
//   //           }
//   //           comments {
//   //             id
//   //           }
//   //         }
//   //       }
//   //     }
//   //   }
//   // `,
//   graphql`
//     fragment ArticlesList_query on Query {
//       allArticles {
//         nodes {
//           id
//         }
//       }
//     }
//   `,
//   {
//     direction: 'forward',
//     getConnectionFromProps: (props) => props.query && props.query.articlesConnection,
//     getFragmentVariables: (prevVars, totalCount) => ({
//       ...prevVars,
//       count: totalCount,
//     }),
//     getVariables: (_0, { count, cursor }, fragmentVariables) => ({
//       ...fragmentVariables,
//       count,
//       cursor,
//     }),
//     query: graphql`
//       query ArticlesListPaginationQuery($count: Int!, $cursor: String) {
//         ...ArticlesList_query @arguments(count: $count, cursor: $cursor)
//       }
//     `,
//   },
// );
