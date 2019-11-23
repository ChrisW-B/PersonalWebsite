import * as Types from '../dataModel/personalApi';

import * as Operations from './github.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type GithubQueryVariables = {};


export type GithubQuery = (
  { __typename?: 'Me' }
  & { github: Types.Maybe<(
    { __typename?: 'Github' }
    & { commits: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Commit' }
      & Pick<Types.Commit, 'url' | 'author' | 'name' | 'time' | 'reltime' | 'message'>
    )>>> }
  )> }
);



/**
 * __useGithubQuery__
 *
 * To run a query within a React component, call `useGithubQuery` and pass it any options that fit your needs.
 * When your component renders, `useGithubQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGithubQuery({
 *   variables: {
 *   },
 * });
 */
export function useGithubQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GithubQuery, GithubQueryVariables>) {
        return ApolloReactHooks.useQuery<GithubQuery, GithubQueryVariables>(Operations.github, baseOptions);
      }
export function useGithubLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GithubQuery, GithubQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GithubQuery, GithubQueryVariables>(Operations.github, baseOptions);
        }
export type GithubQueryHookResult = ReturnType<typeof useGithubQuery>;
export type GithubLazyQueryHookResult = ReturnType<typeof useGithubLazyQuery>;
export type GithubQueryResult = ApolloReactCommon.QueryResult<GithubQuery, GithubQueryVariables>;