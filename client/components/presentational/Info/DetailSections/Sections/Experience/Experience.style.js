import styled from 'react-emotion';

import { SectionContentUL } from '../Sections.style';

export const ExperienceSection = styled(SectionContentUL)`
  padding: 0;
`;

export const ExperienceItem = styled.div `
  border-bottom: 0.1rem dashed #ddd;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 12rem auto;
  grid-template-rows: 1fr auto;
  margin-bottom: 1rem;

  &:last-child {
    border: 0;
  }
`;

export const Company = styled.h3 `
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  margin: 0;
`;

export const JobInfo = styled.p `
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin: 0;
`;

export const JobDetailList = styled.ul `
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

export const JobDetail = styled.li`
  padding: 0;
`;