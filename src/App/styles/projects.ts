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

export const TitleWrapper = styled.div`
  background: linear-gradient(to bottom, #fff0, #fff0 25%, #ffff);
  display: flex;
  flex-flow: column nowrap;
  height: 8rem;
  justify-content: flex-end;
  margin: 1rem 0 0;
`;
export const ProjectTitle = styled.h4`
  font-size: 1.8rem;
  margin: 0 1rem;
`;

export const ProjectScreenshot = styled.div<{ imgUrl: string }>`
  background: url("${props => props.imgUrl}") center / cover no-repeat scroll;
  display: flex;
  flex-flow: column nowrap;
  height: 10rem;
  justify-content: flex-end;
  width: 20rem;
`;
