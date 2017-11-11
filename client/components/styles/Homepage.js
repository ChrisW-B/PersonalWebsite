import styled from 'react-emotion';

export const HomepageDiv = styled.div `
  display: grid;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: initial;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100vh;
  overflow: hidden;

  @media (max-width: 640px) {
    grid-template-rows: auto 1fr;
  }
`;