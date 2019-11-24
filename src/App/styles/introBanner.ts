import styled from '@emotion/styled';

import { AutoSeperator, animateImageCss, transparentBg } from './css';

export const BannerWrapper = styled.div<{ mini: boolean }>`
  align-items: center;
  display: ${({ mini }) => (mini ? 'block' : 'flex')};
  flex-flow: column nowrap;
  height: ${({ mini }) => (mini ? '5rem' : '100%')};
  justify-content: center;
  left: 0;
  position: ${({ mini }) => (mini ? 'absolute' : 'relative')};
  right: 0;
  top: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ScrollMonitor = styled.div`
  position: absolute;
  top: calc(50vh - 32%);
`;

export const BannerPositioner = styled.div<{ mini: boolean }>`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: relative;
  top: ${({ mini }) => (mini ? 0 : -20)}vh;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
`;

export const Banner = styled.div<{ bgImage: string; mini: boolean; fixed: boolean }>`
  align-items: stretch;
  background-color: #fff;
  display: flex;
  flex-flow: row nowrap;
  height: ${({ mini }) => (mini ? 5 : 20)}rem;
  justify-content: stretch;
  position: ${({ mini, fixed }) => (fixed ? 'fixed' : mini ? 'absolute' : 'relative')};
  top: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: ${({ mini }) => (mini ? 100 : 75)}vw;
  z-index: 0;

  &::after {
    background: ${({ bgImage, mini }) =>
      bgImage === '' || mini ? 'transparent' : `url(${bgImage}) center / cover no-repeat scroll`};
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
  margin: 0;
  position: relative;
  top: ${({ mini }) => (mini ? 2.3 : 9)}rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Now = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.4rem;

  justify-content: center;
  ${AutoSeperator};
`;

export const Details = styled.div<{ mini: boolean }>`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 4rem;
  justify-content: space-between;
  position: relative;
  top: ${({ mini }) => (mini ? -2.8 : 7)}rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;
