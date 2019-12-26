import React from 'react';

import { useJobExperienceQuery } from '@schema/queries/jobExperience.generated';
import { CompanyName, ExperienceGrid, JobDescription, JobItem } from '@styles/experience';

export const Experience = () => {
  const { loading, data } = useJobExperienceQuery();

  if (loading) return null;
  const jobs = data?.jobs || [];

  return (
    <ExperienceGrid>
      {jobs.map((job, i) => (
        <JobItem key={job.company} RowHeight={((i + 7) % 5) + 3}>
          <CompanyName>{job.company}</CompanyName>
          <JobDescription>
            <b>{`(${job.when.start} - ${job.when.end}) `}</b>
            {`${job.details.join(' \u00B7 ')}`}
          </JobDescription>
        </JobItem>
      ))}
    </ExperienceGrid>
  );
};
