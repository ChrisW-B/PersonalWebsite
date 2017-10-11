// react/components/Experience/Experience.js

import React from 'react';
import { ExperienceSection, ExperienceItem, Company, JobInfo, JobDetailList, JobDetail } from './Experience.style';
import Jobs from './Jobs';

const Experience = () => (
  <ExperienceSection>
    {
      Jobs.map(({ company, title, when, details }) => (
        <ExperienceItem key={company}>
          <Company>{company}</Company> <JobInfo><strong>{title}</strong>, <i>{when.from}-{when.to}</i></JobInfo>
          <JobDetailList>
            {details.map(text => <JobDetail key={text.length}>{text}</JobDetail>)}
          </JobDetailList>
        </ExperienceItem>
      ))
    }
  </ExperienceSection>
);

export default Experience;