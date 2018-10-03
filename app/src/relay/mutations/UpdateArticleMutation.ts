// /**
//  *
//  * UpdateArticleMutation
//  *
//  */

// import { commitMutation } from 'react-relay';
// import environment from 'relay/environment';

// // types
// import {
//   UpdateArticleMutation,
//   UpdateArticleMutationVariables,
//   UpdateArticleMutationResponse,
// } from 'artifacts/UpdateArticleMutation.graphql';

// const mutation = '';
// // graphql`
// //   mutation UpdateArticleMutation($data: ArticleUpdateInput!, $where: ArticleWhereUniqueInput!) {
// //     updateArticle(data: $data, where: $where) {
// //       id
// //       title
// //       content
// //       author {
// //         id
// //         email
// //         fullName
// //       }
// //     }
// //   }
// // `;

// export { UpdateArticleMutationVariables, UpdateArticleMutationResponse };

// export interface UpdateArticleMutationMetadata {
//   author: UpdateArticleMutationResponse['updateArticle']['author'];
// }

// export default (
//   variables: UpdateArticleMutationVariables,
//   metadata: UpdateArticleMutationMetadata,
// ) =>
//   new Promise<UpdateArticleMutationResponse>((resolve, reject) =>
//     commitMutation<UpdateArticleMutation>(environment, {
//       mutation,
//       variables,
//       optimisticResponse: {
//         updateArticle: {
//           id: variables.where.id,
//           title: variables.data.title,
//           content: variables.data.content,
//           author: metadata.author,
//         },
//       },
//       onCompleted: resolve,
//       onError: reject,
//     }),
//   );

export default (_0: any, _1: any): Promise<any> =>
  new Promise((resolve) => setTimeout(resolve, 200));
