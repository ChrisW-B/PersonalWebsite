import styled from 'react-emotion';

import { SectionContentDIV } from './Sections';

export const ProjectsSection = styled(SectionContentDIV)`
  padding: 0;
`;

export const ProjectItem = styled.div`
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

export const ProjectTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;

export const ProjectGithub = styled.div`
  grid-area: 3 / 4 / 1 / 3;
  text-align: right;
`;