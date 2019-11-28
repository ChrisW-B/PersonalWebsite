import * as Types from '../dataModel/personalApi.generated';

import * as Operations from './bio.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type BioQueryVariables = {};


export type BioQuery = (
  { __typename?: 'Me' }
  & Pick<Types.Me, 'bio'>
);



/**
 * __useBioQuery__
 *
 * To run a query within a React component, call `useBioQuery` and pass it any options that fit your needs.
 * When your component renders, `useBioQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBioQuery({
 *   variables: {
 *   },
 * });
 */
export function useBioQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BioQuery, BioQueryVariables>) {
        return ApolloReactHooks.useQuery<BioQuery, BioQueryVariables>(Operations.bio, baseOptions);
      }
export function useBioLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BioQuery, BioQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BioQuery, BioQueryVariables>(Operations.bio, baseOptions);
        }
export type BioQueryHookResult = ReturnType<typeof useBioQuery>;
export type BioLazyQueryHookResult = ReturnType<typeof useBioLazyQuery>;
export type BioQueryResult = ApolloReactCommon.QueryResult<BioQuery, BioQueryVariables>;