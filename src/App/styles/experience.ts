import styled from '@emotion/styled';

export const ExperienceGrid = styled.div`
  display: grid;
  grid-gap: 1.2rem;
  grid-template: auto / repeat(6, 1fr);
  justify-items: center;
`;

export const CompanyName = styled.h3`
  font-family: 'IBM Plex Serif', serif;
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;

export const JobItem = styled.div`
  grid-column: span 3;
  max-width: 85%;
  &:first-child {
    grid-column: 2 / -2;
    max-width: unset;
  }
`;

export const Spacer = styled.div`
  grid-column: span 1;
`;
export const JobDescription = styled.p`
  font-size: 1.3rem;
`;
