/**
 *
 * UpdateArticleMutation
 *
 */

import { graphql, commitMutation } from 'react-relay';
import environment from 'relay/environment';

// types
import {
  UpdateArticleMutation,
  UpdateArticleMutationVariables,
  UpdateArticleMutationResponse,
} from 'artifacts/UpdateArticleMutation.graphql';

const mutation = graphql`
  mutation UpdateArticleMutation($input: UpdateArticleInput!) {
    updateArticle(input: $input) {
      article {
        id
        title
        content
        updatedAt
      }
    }
  }
`;

export { UpdateArticleMutationVariables, UpdateArticleMutationResponse };

export interface UpdateArticleMutationMetadata {
  id: string;
}

export default (
  variables: UpdateArticleMutationVariables,
  metadata: UpdateArticleMutationMetadata,
) =>
  new Promise<UpdateArticleMutationResponse>((resolve, reject) =>
    commitMutation<UpdateArticleMutation>(environment, {
      mutation,
      variables,
      optimisticResponse: {
        updateArticle: {
          article: {
            id: metadata.id,
            title: variables.input.title,
            content: variables.input.content || null,
            updatedAt: new Date().toISOString(),
          },
        },
      },
      onCompleted: resolve,
      onError: reject,
    }),
  );
