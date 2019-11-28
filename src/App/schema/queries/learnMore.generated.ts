import * as Types from '../dataModel/personalApi.generated';

import * as Operations from './learnMore.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type LearnMoreQueryVariables = {};


export type LearnMoreQuery = (
  { __typename?: 'Me' }
  & Pick<Types.Me, 'email'>
  & { resume: Types.Maybe<(
    { __typename?: 'Resume' }
    & Pick<Types.Resume, 'pdf'>
  )> }
);



/**
 * __useLearnMoreQuery__
 *
 * To run a query within a React component, call `useLearnMoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useLearnMoreQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLearnMoreQuery({
 *   variables: {
 *   },
 * });
 */
export function useLearnMoreQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LearnMoreQuery, LearnMoreQueryVariables>) {
        return ApolloReactHooks.useQuery<LearnMoreQuery, LearnMoreQueryVariables>(Operations.learnMore, baseOptions);
      }
export function useLearnMoreLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LearnMoreQuery, LearnMoreQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LearnMoreQuery, LearnMoreQueryVariables>(Operations.learnMore, baseOptions);
        }
export type LearnMoreQueryHookResult = ReturnType<typeof useLearnMoreQuery>;
export type LearnMoreLazyQueryHookResult = ReturnType<typeof useLearnMoreLazyQuery>;
export type LearnMoreQueryResult = ApolloReactCommon.QueryResult<LearnMoreQuery, LearnMoreQueryVariables>;