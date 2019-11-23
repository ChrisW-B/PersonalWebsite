import * as Types from '../dataModel/personalApi';

import * as Operations from './tweets.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type TweetsQueryVariables = {};


export type TweetsQuery = (
  { __typename?: 'Me' }
  & { twitter: Types.Maybe<(
    { __typename?: 'Twitter' }
    & { tweets: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Tweet' }
      & Pick<Types.Tweet, 'message' | 'reltime' | 'url'>
    )>>> }
  )> }
);



/**
 * __useTweetsQuery__
 *
 * To run a query within a React component, call `useTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTweetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTweetsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TweetsQuery, TweetsQueryVariables>) {
        return ApolloReactHooks.useQuery<TweetsQuery, TweetsQueryVariables>(Operations.tweets, baseOptions);
      }
export function useTweetsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TweetsQuery, TweetsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TweetsQuery, TweetsQueryVariables>(Operations.tweets, baseOptions);
        }
export type TweetsQueryHookResult = ReturnType<typeof useTweetsQuery>;
export type TweetsLazyQueryHookResult = ReturnType<typeof useTweetsLazyQuery>;
export type TweetsQueryResult = ApolloReactCommon.QueryResult<TweetsQuery, TweetsQueryVariables>;