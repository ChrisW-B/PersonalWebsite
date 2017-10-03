import styled from 'react-emotion';
/* eslint-disable import/prefer-default-export */

export const HomepageDiv = styled.div `
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  font-family: 'Source Sans Pro', sans-serif;
  height: 100vh;
  overflow: hidden;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    padding-bottom: 100px;
  }
`;