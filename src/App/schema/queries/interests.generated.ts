import * as Types from '../dataModel/personalApi.generated';

import * as Operations from './interests.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type InterestsQueryVariables = {};


export type InterestsQuery = (
  { __typename?: 'Me' }
  & Pick<Types.Me, 'interests'>
);



/**
 * __useInterestsQuery__
 *
 * To run a query within a React component, call `useInterestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInterestsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInterestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useInterestsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InterestsQuery, InterestsQueryVariables>) {
        return ApolloReactHooks.useQuery<InterestsQuery, InterestsQueryVariables>(Operations.interests, baseOptions);
      }
export function useInterestsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InterestsQuery, InterestsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InterestsQuery, InterestsQueryVariables>(Operations.interests, baseOptions);
        }
export type InterestsQueryHookResult = ReturnType<typeof useInterestsQuery>;
export type InterestsLazyQueryHookResult = ReturnType<typeof useInterestsLazyQuery>;
export type InterestsQueryResult = ApolloReactCommon.QueryResult<InterestsQuery, InterestsQueryVariables>;