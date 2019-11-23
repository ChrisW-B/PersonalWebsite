import * as Types from '../dataModel/personalApi';

import * as Operations from './nowPlaying.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type NowPlayingQueryVariables = {};


export type NowPlayingQuery = (
  { __typename?: 'Me' }
  & { lastfm: Types.Maybe<(
    { __typename?: 'LastFM' }
    & { nowplaying: Types.Maybe<(
      { __typename?: 'Song' }
      & Pick<Types.Song, 'title' | 'artist'>
    )> }
  )> }
);



/**
 * __useNowPlayingQuery__
 *
 * To run a query within a React component, call `useNowPlayingQuery` and pass it any options that fit your needs.
 * When your component renders, `useNowPlayingQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNowPlayingQuery({
 *   variables: {
 *   },
 * });
 */
export function useNowPlayingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NowPlayingQuery, NowPlayingQueryVariables>) {
        return ApolloReactHooks.useQuery<NowPlayingQuery, NowPlayingQueryVariables>(Operations.nowPlaying, baseOptions);
      }
export function useNowPlayingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NowPlayingQuery, NowPlayingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NowPlayingQuery, NowPlayingQueryVariables>(Operations.nowPlaying, baseOptions);
        }
export type NowPlayingQueryHookResult = ReturnType<typeof useNowPlayingQuery>;
export type NowPlayingLazyQueryHookResult = ReturnType<typeof useNowPlayingLazyQuery>;
export type NowPlayingQueryResult = ApolloReactCommon.QueryResult<NowPlayingQuery, NowPlayingQueryVariables>;