import * as Types from '../dataModel/personalApi.generated';

import * as Operations from './jobExperience.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type JobExperienceQueryVariables = {};


export type JobExperienceQuery = (
  { __typename?: 'Me' }
  & { jobs: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Job' }
    & Pick<Types.Job, 'title' | 'company' | 'details'>
    & { when: Types.Maybe<(
      { __typename?: 'Timespan' }
      & Pick<Types.Timespan, 'start' | 'end'>
    )> }
  )>>> }
);



/**
 * __useJobExperienceQuery__
 *
 * To run a query within a React component, call `useJobExperienceQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobExperienceQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobExperienceQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobExperienceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobExperienceQuery, JobExperienceQueryVariables>) {
        return ApolloReactHooks.useQuery<JobExperienceQuery, JobExperienceQueryVariables>(Operations.jobExperience, baseOptions);
      }
export function useJobExperienceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobExperienceQuery, JobExperienceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobExperienceQuery, JobExperienceQueryVariables>(Operations.jobExperience, baseOptions);
        }
export type JobExperienceQueryHookResult = ReturnType<typeof useJobExperienceQuery>;
export type JobExperienceLazyQueryHookResult = ReturnType<typeof useJobExperienceLazyQuery>;
export type JobExperienceQueryResult = ApolloReactCommon.QueryResult<JobExperienceQuery, JobExperienceQueryVariables>;