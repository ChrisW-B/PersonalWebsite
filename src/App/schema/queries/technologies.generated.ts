import * as Types from '../dataModel/personalApi.generated';

import * as Operations from './technologies.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type TechnologiesQueryVariables = {};


export type TechnologiesQuery = (
  { __typename?: 'Me' }
  & { skills: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Skills' }
    & Pick<Types.Skills, 'category' | 'types'>
  )>>> }
);



/**
 * __useTechnologiesQuery__
 *
 * To run a query within a React component, call `useTechnologiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechnologiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechnologiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTechnologiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TechnologiesQuery, TechnologiesQueryVariables>) {
        return ApolloReactHooks.useQuery<TechnologiesQuery, TechnologiesQueryVariables>(Operations.technologies, baseOptions);
      }
export function useTechnologiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TechnologiesQuery, TechnologiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TechnologiesQuery, TechnologiesQueryVariables>(Operations.technologies, baseOptions);
        }
export type TechnologiesQueryHookResult = ReturnType<typeof useTechnologiesQuery>;
export type TechnologiesLazyQueryHookResult = ReturnType<typeof useTechnologiesLazyQuery>;
export type TechnologiesQueryResult = ApolloReactCommon.QueryResult<TechnologiesQuery, TechnologiesQueryVariables>;