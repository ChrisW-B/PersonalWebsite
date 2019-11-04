import React from 'react';
import { useQuery } from 'react-apollo';
import Markdown from 'react-remarkable';

import jobExperienceQuery from '@queries/jobExperience.gql';
import {
  Company,
  ExperienceItem,
  ExperienceSection,
  JobDetail,
  JobDetailList,
  JobInfo,
} from '@styles/Experience';

const Experience = () => {
  const { data, loading, error } = useQuery(jobExperienceQuery);
  if (loading || error) return null;

  return (
    <ExperienceSection>
      {data.jobs.map(({ company, title, when, details }) => (
        <ExperienceItem key={company}>
          <Company>{company}</Company>

          <JobInfo>
            <strong>{`${title}, `}</strong>
            <i>{`${when.start}-${when.end}`}</i>
          </JobInfo>
          <JobDetailList>
            {details.map(text => (
              <JobDetail key={text}>
                <Markdown source={text} />
              </JobDetail>
            ))}
          </JobDetailList>
        </ExperienceItem>
      ))}
    </ExperienceSection>
  );
};

export default Experience;
