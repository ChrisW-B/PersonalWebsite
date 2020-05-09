import styled from '@emotion/styled';

export const ProjectList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
`;

export const ProjectItem = styled.li`
  align-items: center;
  display: flex;
  flex: 1 1 33%;
  flex-flow: column nowrap;
  margin: 1rem 0;
  min-width: 21rem;
`;

export const TitleWrapper = styled.div`
  background: linear-gradient(
    to bottom,
    var(--light-grey-00),
    var(--light-grey-00) 10%,
    var(--light-grey)
  );
  display: flex;
  flex-flow: column nowrap;
  height: 8rem;
  justify-content: flex-end;
  margin: 1rem 0 0;
`;
export const ProjectTitle = styled.h4`
  font-size: var(--body-text);
  margin: 0 1rem;
`;

export const ProjectScreenshot = styled.div<{ imgUrl: string }>`
  background: url("${(props) => props.imgUrl}") center / cover no-repeat scroll;
  border-radius: 0.4rem;
  display: flex;
  flex-flow: column nowrap;
  height: 10rem;
  justify-content: flex-end;
  width: 20rem;
`;
