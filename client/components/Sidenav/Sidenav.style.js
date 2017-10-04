import styled, { keyframes } from 'react-emotion';

const animateImage = keyframes `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const emptyBackground = `linear-gradient(102deg, rgba(0, 195, 216, 0.82) 9%, rgba(186, 39, 66, 0.51) 100%)`;
const fullBackground = bg => `${emptyBackground}, url(${bg}) center / cover no-repeat scroll`;
export const SidenavContainer = styled.aside `
  animation: ${animateImage} 2s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ bg }) => (bg ? fullBackground(bg) : emptyBackground)};
  color: #fff;
  display: flex;
  flex-shrink: 0;
  font-family: 'Source Sans Pro', monospace;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  width: 40vw;

  @media only screen and (max-width: 640px) {
    height: auto;
    overflow: hidden;
    width: 100%;
  }
`;

export const Name = styled.h1 `
  font-family: 'Source Code Pro', monospace;
  font-size: 2.1em;
  margin: 0;
  padding: 2px;
`;

export const SidenavItems = styled.ul `
  font-size: 1.5em;
  list-style: none;
  padding-right: 20px;

  @media only screen and (max-width: 900px) {
    font-size: 1.4em;
  }

  @media only screen and (max-width: 640px) {
    font-size: 1.1em;
    margin: 0;
    padding: 2px;
  }
`;
export const PhotoDescription = styled.div `
  bottom: 0;
  font-size: 0.65em;
  left: 0;
  overflow: hidden;
  padding: 2px 4px;
  position: fixed;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(40vw - 8px);

  & > a {
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;