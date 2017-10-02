import styled from 'emotion/react';

export const InfoSection = styled.main `
  background-color: #fff;
  color: #0d2659;
  display: flex;
  flex-shrink: 0;
  height: 100%;
  justify-content: center;
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
  padding-top: 30px;
  width: 100px;
`;