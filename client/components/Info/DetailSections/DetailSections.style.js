import styled from 'react-emotion';
import { InfoSubSection, Link } from '../Info.style';

export const DetailList = InfoSubSection.withComponent(`ul`);

export const DetailListItem = styled.li `
  border-top: 1px dashed rgba(148, 174, 229, 0.25);
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: minmax(140px, 1fr) repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding-top: 10px;

  p,
  ul {
    margin: 0;
  }

  @media (max-width: 640px) {
    grid-template-rows: 1.8em 1fr;
  }
`;

export const SectionTitle = styled.h2 `
  color: rgba(0, 195, 216, 1);
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  margin: 0;
  text-align: left;
  text-decoration: underline rgba(186, 39, 66, 1) dotted;
  text-transform: uppercase;

  @media (max-width: 640px) {
    grid-column: 1 / 5;
    text-align: center;
  }
`;

export { Link };