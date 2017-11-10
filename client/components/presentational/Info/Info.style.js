import styled from 'react-emotion';

export const InfoSection = styled.main `
  align-items: center;
  background-color: #fff;
  color: #0d2659;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  grid-column: 2 / 4;
  grid-row: 1 / 4;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  overflow-y: scroll;

  @media only screen and (max-width: 640px) {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }
`;

export const ProfilePhoto = styled.img `
  border-radius: 100%;
  height: 10rem;
  margin-top: 3rem;
  width: 10rem;
`;

export const InfoSubSection = styled.div `
  margin: 0;
  max-width: 80rem;
  padding: 0 2rem;
`;

export const Link = styled.a `
  border-bottom: 0.1rem dotted #cfe3cf;
  color: #8d4881;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #cfe3cf;
  }
`;