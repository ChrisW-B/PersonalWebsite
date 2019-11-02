import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const SlideUpIn = keyframes`
  from {
    height: 0.1px;
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
    height: 0.1px;
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;

const animationStatus = status => {
  switch (status) {
    case 'exiting':
      return css`
        animation: 1000ms ${SlideUpOut} cubic-bezier(0.4, 0, 0.2, 1);
      `;
    case 'entering':
      return css`
        animation: 1000ms ${SlideUpIn} cubic-bezier(0.4, 0, 0.2, 1);
      `;
    case 'exited':
      return css`
        display: none;
      `;
    default:
      return '';
  }
};

/* stylelint-disable declaration-colon-newline-after */
export const Widget = styled.div`
  color: #fff;
  height: auto;
  ${properties => animationStatus(properties.status)};
  padding-left: 1rem;
  text-align: left;
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
