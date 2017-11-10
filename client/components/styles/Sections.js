import styled from 'react-emotion';

export const SectionContentP = styled.p `
  grid-column: 2 / 5;
  grid-row: 1 / 3;
  margin: 0;

  div {
    span {
      p {
        margin: 0;
      }
    }
  }

  @media (max-width: 1000px) {
    grid-column: 1 / 5;
    grid-row: 2 / 3;
  }
`;

export const SectionContentUL = SectionContentP.withComponent('ul');
export const SectionContentDIV = SectionContentP.withComponent('div');