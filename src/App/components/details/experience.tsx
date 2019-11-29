import React from 'react';

import { useJobExperienceQuery } from '@schema/queries/jobExperience.generated';
import { CompanyName, ExperienceGrid, ExperienceHeader, JobItem } from '@styles/experience';

export const Experience = () => {
  const { loading, data } = useJobExperienceQuery();

  if (loading) return null;
  const jobs = data?.jobs || [];

  return (
    <>
      <ExperienceHeader>Experience</ExperienceHeader>
      <ExperienceGrid>
        {jobs.map(job => (
          <React.Fragment key={job.company}>
            <JobItem>
              <CompanyName>{job.company}</CompanyName>
              <p>
                <b>{`(${job.when.start} - ${job.when.end}) `}</b>
                {`${job.details.join(', ')}`}
              </p>
            </JobItem>
          </React.Fragment>
        ))}
      </ExperienceGrid>
    </>
  );
};
