import styled from 'react-emotion';

export const SectionContentP = styled.p `
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