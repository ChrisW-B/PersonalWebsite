import styled from 'react-emotion';

export const DetailList = styled.ul `
  margin: 0;
  padding: 0;
`;

export const DetailListItem = styled.li `
  border-top: 1px dashed hsl(220.3, 74.5, 90);
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  & > div {
    margin-bottom: 10px;
  }

  p,
  ul {
    margin: 0;
  }

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const SectionTitle = styled.h2 `
  color: rgba(0, 195, 216, 1);
  margin: 0;
  text-align: center;
  text-decoration: underline rgba(186, 39, 66, 1) dotted;
  text-transform: uppercase;

  @media (min-width: 640px) {
    margin-right: 10px;
    min-width: 150px;
    text-align: left;
  }
`;