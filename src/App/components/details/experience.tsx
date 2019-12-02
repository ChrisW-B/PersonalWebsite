import React from 'react';

import { useJobExperienceQuery } from '@schema/queries/jobExperience.generated';
import { CompanyName, ExperienceGrid, JobDescription, JobItem } from '@styles/experience';

export const Experience = () => {
  const { loading, data } = useJobExperienceQuery();

  if (loading) return null;
  const jobs = data?.jobs || [];

  return (
    <ExperienceGrid>
      {jobs.map(job => (
        <JobItem key={job.company}>
          <CompanyName>{job.company}</CompanyName>
          <JobDescription>
            <b>{`(${job.when.start} - ${job.when.end}) `}</b>
            {`${job.details.join('. ')}`}
          </JobDescription>
        </JobItem>
      ))}
    </ExperienceGrid>
  );
};
