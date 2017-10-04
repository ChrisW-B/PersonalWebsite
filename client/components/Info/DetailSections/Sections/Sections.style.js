import styled from 'react-emotion';

export { Link } from '../DetailSections.style';

export const SectionContentP = styled.p `
  grid-column: 2 / 5;
  grid-row: 1 / 3;

  @media (max-width: 640px) {
    grid-column: 1 / 5;
    grid-row: 2 / 3;
  }
`;

export const SectionContentUL = SectionContentP.withComponent(`ul`);
export const SectionContentDIV = SectionContentP.withComponent(`div`);