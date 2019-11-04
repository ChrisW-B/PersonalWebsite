import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const SlideUpIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const SlideUpOut = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;

const animateIn = css`
  animation: 1000ms ${SlideUpIn} cubic-bezier(0.4, 0, 0.2, 1);
`;
const animateOut = css`
  animation: 1000ms ${SlideUpOut} cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Widget = styled.div`
  color: #fff;
  height: auto;
  padding-left: 1rem;
  text-align: left;
  &.enter-active {
    ${animateIn};
  }
  &.exit-active {
    ${animateOut};
  }
`;

export const WidgetWrapper = styled.div`
  display: initial;

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
