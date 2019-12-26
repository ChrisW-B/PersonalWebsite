import styled from '@emotion/styled';

export const ExperienceGrid = styled.div`
  display: grid;
  grid-gap: 1.2rem 3rem;
  grid-template: auto / repeat(6, 1fr);
  justify-items: center;
`;

export const CompanyName = styled.h3`
  font-family: 'IBM Plex Serif', serif;
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;

export const JobItem = styled.div<{ RowHeight: number }>`
  grid-column: span 2;
  grid-row: span ${({ RowHeight }) => RowHeight};

  /* &:first-child {
    grid-column: 2 / -2;
    max-width: unset;
  } */
`;

export const JobDescription = styled.p`
  font-size: 1.3rem;
`;
