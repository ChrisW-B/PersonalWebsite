import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const SlideUpIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const SlideUpOut = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;

const materialAnimation = `cubic-bezier(0.4, 0, 0.2, 1)`;
const transitionOut = `1000ms ${SlideUpOut} ${materialAnimation}`;
const transitionIn = `1000ms ${SlideUpIn} ${materialAnimation}`;
const animationStatus = (status) => {
  if (status === `entering`) return transitionIn;
  if (status === `exiting`) return transitionOut;
  return ``;
};
const heightStatus = status => (status === `exiting` ? 0 : `auto`);

export const Widget = styled.div`
  animation: ${({ status }) => animationStatus(status)};
  color: #fff;
  height: ${({ status }) => heightStatus(status)};
  padding-left: 1rem;
  text-align: left;
`;

export const WidgetWrapper = styled.div`

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Time = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Description = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.3rem;
  word-wrap: break-word;

  & > a {
    color: #cfe3cf;
    text-decoration: none;
    text-shadow: none;
    transition: 0.2s;
    white-space: nowrap;

    &:hover {
      color: #8d4881;
    }
  }
`;