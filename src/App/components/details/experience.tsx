import React from 'react';

import { useJobExperienceQuery } from '@queries/jobExperience.generated';
import { CompanyName, ExperienceGrid, JobDescription, JobItem } from '@styles/experience';

export default () => {
  const { loading, data } = useJobExperienceQuery();

  if (loading) return null;
  const jobs = data?.jobs || [];

  return (
    <ExperienceGrid>
      {jobs.map((job, i) => (
        <JobItem
          key={job.company}
          ColumnSide={i % 2 === 1 ? 'right' : 'left'}
          RowNumber={i}
          TotalRows={jobs.length}
        >
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
