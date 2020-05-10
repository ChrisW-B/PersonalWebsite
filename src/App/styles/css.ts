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
  animation: ${animateImage} 5s var(--bezier-transition);
`;

export const transparentBg = css`
  background: linear-gradient(-0.28turn, var(--cyan-70) 9%, var(--rose-50) 100%);
`;

export const whiteBg = css`
  background: var(--white);
`;
