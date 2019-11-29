import styled from '@emotion/styled';

export const ExperienceGrid = styled.div`
  display: grid;
  grid-gap: 1.2rem;
  grid-template: auto / repeat(6, 1fr);
  justify-items: center;
`;

export const ExperienceHeader = styled.h2`
  font-family: 'Merriweather', serif;
  font-size: 2.4rem;
  text-align: center;
`;

export const CompanyName = styled.h3`
  font-family: 'Merriweather', serif;
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;

export const JobItem = styled.div`
  grid-column: span 3;
  max-width: 85%;
  &:first-child {
    grid-column: 1 / -1;
    max-width: 65%;
  }
`;

export const Spacer = styled.div`
  grid-column: span 1;
`;
