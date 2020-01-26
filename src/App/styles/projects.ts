import styled from '@emotion/styled';

export const ProjectList = styled.ul`
  display: grid;
  grid-auto-flow: dense;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  list-style: none;
`;

export const ProjectItem = styled.li`
  grid-row: span 2;
`;
