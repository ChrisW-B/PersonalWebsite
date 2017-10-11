import styled from 'react-emotion';

import { Link, SectionContentDIV } from '../Sections.style';

export const ProjectsSection = styled(SectionContentDIV)`
  padding: 0;
`;

export const ProjectItem = styled.div `
  border-bottom: 1px dashed #ddd;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 120px auto;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;

  &:last-child {
    border: 0;
  }
`;

export const ProjectTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;

export const ProjectGithub = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  text-align: right;
`;

export const ProjectDetails = styled.p`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  margin: 0;
`;

export { Link };