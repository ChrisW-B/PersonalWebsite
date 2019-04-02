import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const animateImage = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const emptyBackground = `linear-gradient(-102deg, rgba(0, 195, 216, 0.82) 9%, rgba(186, 39, 66, 0.51) 100%)`;
const fullBackground = bg => `${emptyBackground}, url(${bg}) center / cover no-repeat scroll`;

export const SidenavContainer = styled.aside`
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-family: 'Source Sans Pro', monospace;
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  justify-content: center;
  position: relative;

  &::after {
    animation: ${animateImage} 5s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${({ bg }) => (bg ? fullBackground(bg) : `transparent`)};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &::before {
    background: ${emptyBackground};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -2;
  }

  @media only screen and (max-width: 640px) {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    height: auto;
    overflow: hidden;
    width: 100%;
  }
`;

export const Name = styled.h1`
  font-family: 'Source Code Pro', monospace;
  font-size: 3.5rem;
  margin: 0;
`;

export const SidenavItems = styled.ul`
  align-self: center;
  flex: 1 1 auto;
  list-style: none;
  margin: 0;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  padding: 4rem 2rem 0;

  @media only screen and (max-width: 900px) {
    font-size: 2.4rem;
  }

  @media only screen and (max-width: 640px) {
    font-size: 1.7rem;
    margin: 0;
    padding: 0.2rem;
  }
`;
export const PhotoDescription = styled.div`
  font-size: 1rem;
  padding: 0.2rem 0.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > a {
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const SidenavItem = styled.li`
  font-family: 'Source Code Pro', monospace;
  max-width: 40rem;
  padding-top: 1rem;
  text-shadow: 0 0 0.4rem #6a6a6a;

  @media (min-width: 900px) {
    font-size: ${({ emphasis }) => (emphasis ? `3rem` : `2.7rem`)};
  }

  @media only screen and (max-width: 640px) {
    display: inline;

    &:not(:last-child) {
      &:not(:first-of-type) {
        &::after {
          content: ' / ';
        }
      }
    }
  }
`;

export const Icon = styled.span`
  font-size: 2rem;
  padding-right: 0.3rem;

  @media only screen and (min-width: 640px) {
    display: none;
  }
`;

export const Link = styled.a`
  color: #cfe3cf;
  text-decoration: none;
  text-shadow: none;
  transition: color 0.2s;
  white-space: nowrap;

  &:hover {
    color: #8d4881;
  }
`;
