import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const animateImage = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const animateImageCss = css`
  animation: ${animateImage} 5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BannerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  justify-content: center;
`;

export const StickyWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-top: -20vh;
  position: sticky;
  top: 0;
  width: 100%;
`;

export const Banner = styled.div<{ bgImage: string; isLoading: boolean; mini: boolean }>`
  align-items: stretch;
  display: flex;
  flex-flow: row nowrap;
  height: ${({ mini }) => (mini ? 5 : 20)}rem;
  justify-content: stretch;
  position: ${({ mini }) => (mini ? 'absolute' : 'relative')};
  top: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: ${({ mini }) => (mini ? 100 : 75)}vw;
  background-color: ${({ mini }) => (mini ? '#FFF' : 'transparent')};

  &::after {
    background: ${({ isLoading, bgImage, mini }) =>
      isLoading || mini ? 'transparent' : `url(${bgImage}) center / cover no-repeat scroll`};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    ${({ bgImage }) => bgImage && animateImageCss}
  }
`;

const transparentBg = css`
  background: linear-gradient(-0.28turn, rgba(0, 195, 216, 0.7) 9%, rgba(186, 39, 66, 0.5) 100%);
`;

export const CenterText = styled.div<{ mini: boolean }>`
  ${transparentBg};
  align-items: center;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Name = styled.h1<{ mini: boolean }>`
  color: #fff;
  font: 700 ${({ mini }) => (mini ? 2.8 : 12)}rem -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  top: 0.3rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Now = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.4rem;
  height: 3rem;
  justify-content: center;
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
