import * as Types from '../dataModel/personalApi';

import * as Operations from './photoBlog.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type PhotoBlogQueryVariables = {};


export type PhotoBlogQuery = (
  { __typename?: 'Me' }
  & { photoBlog: Types.Maybe<(
    { __typename?: 'Blog' }
    & { photos: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Photo' }
      & Pick<Types.Photo, 'url' | 'title' | 'photo'>
    )>>> }
  )> }
);



/**
 * __usePhotoBlogQuery__
 *
 * To run a query within a React component, call `usePhotoBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `usePhotoBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePhotoBlogQuery({
 *   variables: {
 *   },
 * });
 */
export function usePhotoBlogQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PhotoBlogQuery, PhotoBlogQueryVariables>) {
        return ApolloReactHooks.useQuery<PhotoBlogQuery, PhotoBlogQueryVariables>(Operations.photoBlog, baseOptions);
      }
export function usePhotoBlogLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PhotoBlogQuery, PhotoBlogQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PhotoBlogQuery, PhotoBlogQueryVariables>(Operations.photoBlog, baseOptions);
        }
export type PhotoBlogQueryHookResult = ReturnType<typeof usePhotoBlogQuery>;
export type PhotoBlogLazyQueryHookResult = ReturnType<typeof usePhotoBlogLazyQuery>;
export type PhotoBlogQueryResult = ApolloReactCommon.QueryResult<PhotoBlogQuery, PhotoBlogQueryVariables>;