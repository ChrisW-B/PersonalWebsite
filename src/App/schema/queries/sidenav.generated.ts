import * as Types from '../dataModel/personalApi';

import * as Operations from './sidenav.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type SidenavQueryVariables = {};


export type SidenavQuery = (
  { __typename?: 'Me' }
  & Pick<Types.Me, 'email'>
  & { twitter: Types.Maybe<(
    { __typename?: 'Twitter' }
    & Pick<Types.Twitter, 'url'>
  )>, github: Types.Maybe<(
    { __typename?: 'Github' }
    & Pick<Types.Github, 'url'>
  )>, linkedin: Types.Maybe<(
    { __typename?: 'Linkedin' }
    & Pick<Types.Linkedin, 'url'>
  )>, lastfm: Types.Maybe<(
    { __typename?: 'LastFM' }
    & Pick<Types.LastFm, 'url'>
  )>, photoBlog: Types.Maybe<(
    { __typename?: 'Blog' }
    & Pick<Types.Blog, 'url'>
  )> }
);



/**
 * __useSidenavQuery__
 *
 * To run a query within a React component, call `useSidenavQuery` and pass it any options that fit your needs.
 * When your component renders, `useSidenavQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSidenavQuery({
 *   variables: {
 *   },
 * });
 */
export function useSidenavQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SidenavQuery, SidenavQueryVariables>) {
        return ApolloReactHooks.useQuery<SidenavQuery, SidenavQueryVariables>(Operations.sidenav, baseOptions);
      }
export function useSidenavLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SidenavQuery, SidenavQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SidenavQuery, SidenavQueryVariables>(Operations.sidenav, baseOptions);
        }
export type SidenavQueryHookResult = ReturnType<typeof useSidenavQuery>;
export type SidenavLazyQueryHookResult = ReturnType<typeof useSidenavLazyQuery>;
export type SidenavQueryResult = ApolloReactCommon.QueryResult<SidenavQuery, SidenavQueryVariables>;