import { css, keyframes } from '@emotion/core';

export const AutoSeperator = css`
  > * {
    margin: 0;
    &:not(:last-child) {
      &::after {
        content: '𐄁';
        font-weight: 900;
        margin: 0 0.5rem;
      }
    }
  }
`;

export const animateImage = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const animateImageCss = css`
  animation: ${animateImage} 5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const transparentBg = css`
  background: linear-gradient(-0.28turn, rgba(0, 195, 216, 0.7) 9%, rgba(186, 39, 66, 0.5) 100%);
`;

export const whiteBg = css`
  background: #fff;
`;
