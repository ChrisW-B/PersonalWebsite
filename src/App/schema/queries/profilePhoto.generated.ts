import * as Types from '../dataModel/personalApi.generated';

import * as Operations from './profilePhoto.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type ProfilePhotoQueryVariables = {};


export type ProfilePhotoQuery = (
  { __typename?: 'Me' }
  & Pick<Types.Me, 'photo'>
);



/**
 * __useProfilePhotoQuery__
 *
 * To run a query within a React component, call `useProfilePhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfilePhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilePhotoQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfilePhotoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProfilePhotoQuery, ProfilePhotoQueryVariables>) {
        return ApolloReactHooks.useQuery<ProfilePhotoQuery, ProfilePhotoQueryVariables>(Operations.profilePhoto, baseOptions);
      }
export function useProfilePhotoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProfilePhotoQuery, ProfilePhotoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProfilePhotoQuery, ProfilePhotoQueryVariables>(Operations.profilePhoto, baseOptions);
        }
export type ProfilePhotoQueryHookResult = ReturnType<typeof useProfilePhotoQuery>;
export type ProfilePhotoLazyQueryHookResult = ReturnType<typeof useProfilePhotoLazyQuery>;
export type ProfilePhotoQueryResult = ApolloReactCommon.QueryResult<ProfilePhotoQuery, ProfilePhotoQueryVariables>;