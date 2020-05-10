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
  a {
    text-decoration: none;
  }
`;

export const ProjectDetails = styled.div`
  width: 20rem;
`;
export const ProjectDescriptionPara = styled.p`
  font-size: var(--description-text);
  padding: 0 0.3rem;
`;
export const TechList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
`;
export const Tech = styled.span`
  font-size: var(--list-text);
  padding: 0 0.3rem;
  :not(:last-of-type) {
    &::after {
      content: '•';
      display: inline-block;
      padding-left: 0.3rem;
    }
  }
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
  color: var(--link-blue);
  font-size: var(--body-text);
  margin: 0 0.3rem;
`;

export const ProjectScreenshot = styled.a<{ imgUrl: string }>`
  background: url("${(props) => props.imgUrl}") center / cover no-repeat scroll;
  border-radius: 0.4rem;
  display: flex;
  flex-flow: column nowrap;
  height: 10rem;
  justify-content: flex-end;
  width: 20rem;
`;
