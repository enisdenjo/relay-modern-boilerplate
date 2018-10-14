/**
 *
 * ArticlesList
 *
 */

import React from 'react';
import { graphql, createPaginationContainer, RelayPaginationProp } from 'react-relay';

// types
import { ArticlesList_query } from 'artifacts/ArticlesList_query.graphql';

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
  query: ArticlesList_query;
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
        {query.articles!.edges.map(({ node: { id, createdAt, author, title, content } }) => (
          <Grid key={id} item>
            <Card>
              <CardContent>
                <Grid container direction="column" spacing={16}>
                  <Grid item>
                    <Typography variant="h5">
                      <Link to={`/articles/${id}`}>{title}</Link>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
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
        ))}
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

export default createPaginationContainer(
  ArticlesList,
  graphql`
    fragment ArticlesList_query on Query
      @argumentDefinitions(cursor: { type: "Cursor" }, count: { type: "Int!" }) {
      articles(first: $count, after: $cursor)
        @connection(key: "ArticlesList_articles", filters: []) {
        totalCount
        edges {
          node {
            id
            title
            content
            createdAt
            author {
              id
              fullName
            }
          }
        }
      }
    }
  `,
  {
    direction: 'forward',
    getConnectionFromProps: (props) => props.query && props.query.articles,
    getFragmentVariables: (prevVars, totalCount) => ({
      ...prevVars,
      count: totalCount,
    }),
    getVariables: (_0, { count, cursor }, fragmentVariables) => ({
      ...fragmentVariables,
      count,
      cursor,
    }),
    query: graphql`
      query ArticlesListPaginationQuery($count: Int!, $cursor: Cursor) {
        ...ArticlesList_query @arguments(count: $count, cursor: $cursor)
      }
    `,
  },
);
