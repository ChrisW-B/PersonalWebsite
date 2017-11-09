import styled from 'react-emotion';

import { Link, SectionContentDIV } from '../Sections.style';

export const ProjectsSection = styled(SectionContentDIV)`
  padding: 0;
`;

export const ProjectItem = styled.div `
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

export const ProjectTitle = styled.div `
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;

export const ProjectGithub = styled.div `
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  text-align: right;
`;

export const ProjectDetails = styled.p `
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  margin: 0;

  code {
    background-color: rgba(27, 31, 35, 0.05);
    border: 1px solid #e1e1e8;
    border-radius: 3px;
    color: #d72b3f;
    font-family: 'Operator Mono', Consolas, monaco, "Ubuntu Mono", courier, monospace;
    font-size: 85%;
    margin: 0;
    padding-bottom: 0.2em;
    padding-top: 0.2em;

    &::before,
    &::after {
      content: "\00a0";
      letter-spacing: -0.2rem;
    }
  }

  a {
    border-bottom: 0.1rem dotted #cfe3cf;
    color: #8d4881;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #cfe3cf;
    }
  }
`;

export { Link };