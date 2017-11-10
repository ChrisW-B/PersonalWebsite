// react/components/Experience/Experience.js

import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import Markdown from 'react-remarkable';
import { ExperienceSection, ExperienceItem, Company, JobInfo, JobDetailList, JobDetail } from './Experience.style';

const query = gql `
  {
    jobs {
      title company details
      when {
        start end
      }
    }
  }
`;

const Experience = ({ data: { jobs } }) => (
  <ExperienceSection>
    {
      jobs.map(({ company, title, when, details }) => (
        <ExperienceItem key={company}>
          <Company>{company}</Company> <JobInfo><strong>{title}</strong>, <i>{when.start}-{when.end}</i></JobInfo>
          <JobDetailList>
            {details.map(text => <JobDetail key={text}><Markdown source={text} /></JobDetail>)}
          </JobDetailList>
        </ExperienceItem>
      ))
    }
  </ExperienceSection>
);

Experience.propTypes = { data: PropTypes.shape({ jobs: PropTypes.array }) };
Experience.defaultProps = { data: { jobs: [] } };

export default graphql(query)(Experience);