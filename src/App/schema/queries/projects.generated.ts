import * as Types from '../dataModel/personalApi';

import * as Operations from './projects.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type ProjectsQueryVariables = {};


export type ProjectsQuery = (
  { __typename?: 'Me' }
  & { projects: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Project' }
    & Pick<Types.Project, 'name' | 'description' | 'github' | 'website' | 'technologies'>
  )>>> }
);



/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProjectsQuery, ProjectsQueryVariables>(Operations.projects, baseOptions);
      }
export function useProjectsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(Operations.projects, baseOptions);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = ApolloReactCommon.QueryResult<ProjectsQuery, ProjectsQueryVariables>;