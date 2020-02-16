import styled from '@emotion/styled';

export const Overview = styled.p`
  font-size: 1.6rem;
  margin: 0 0 2rem;
`;

export const DetailHeader = styled.h2`
  font-family: 'IBM Plex Serif', serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
`;

export const DetailContent = styled.div`
  :not(:last-of-type) {
    position: relative;
    ::after {
      background-image: linear-gradient(
        to right,
        transparent,
        --var(--rose),
        --var(--cyan),
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
  background: var(--light-grey);
  display: grid;
  grid-gap: 3rem 2rem;
  grid-template: auto / auto;
  margin: 0 3% 10rem;
  padding: 5rem 10%;
  transition: all 0.5s var(--bezier-transition);
`;
