import styled from 'react-emotion';

export const InfoSection = styled.main `
  align-items: center;
  background-color: #fff;
  color: #0d2659;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  width: 60vw;

  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const ProfilePhoto = styled.img `
  border-radius: 100%;
  height: 100px;
  margin-top: 30px;
  width: 100px;
`;

export const InfoSubSection = styled.div `
  margin: 0;
  max-width: 800px;
  padding: 0 20px;
`;

export const Link = styled.a `
  border-bottom: 1px dotted #cfe3cf;
  color: #8d4881;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #cfe3cf;
  }
`;