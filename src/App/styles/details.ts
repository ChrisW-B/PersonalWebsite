import styled from '@emotion/styled';

export const Overview = styled.p`
  font-size: 1.6rem;
  margin: 0 0 2rem;
`;

export const DetailHeader = styled.h2`
  font-family: 'IBM Plex Serif', serif;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  padding-bottom: 1rem;
  text-align: right;
  transform: rotate(0.5turn);
  writing-mode: vertical-lr;
`;

export const DetailContent = styled.div`
  :not(:last-of-type) {
    position: relative;
    ::after {
      background-image: linear-gradient(
        to right,
        transparent,
        rgba(186, 39, 66),
        rgba(0, 195, 216),
        transparent
      );
      bottom: -0.1rem;
      content: '';
      height: 0.1rem;
      left: 5%;
      position: absolute;
      right: 5%;
      width: 90%;
    }
  }
`;

export const DetailWrapper = styled.article`
  background: #f9fcfc;
  display: grid;
  grid-gap: 3rem 2rem;
  grid-template: auto / 4rem auto;
  margin: 0 3% 10rem;
  padding: 5rem 10%;
`;
