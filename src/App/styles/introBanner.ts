import styled from '@emotion/styled';

import LightBulb from '@assets/lightbulb.svg';

import { AutoSeperator, animateImageCss, transparentBg, whiteBg } from './css';

export const BulbIcon = styled(LightBulb)<{ isLightMode: boolean }>`
  fill: var(--white);
  height: 3.6rem;
  transition: all 0.5s var(--bezier-transition);
  width: 3.6rem;
`;

export const DarkModeButton = styled.button`
  background: transparent;
  border: 0;
  bottom: 0;
  cursor: pointer;
  height: 4.8rem;
  margin: 0;
  position: absolute;
  right: 0;
  z-index: 100;
`;

export const BannerWrapper = styled.div<{ mini: boolean }>`
  align-items: center;
  display: ${({ mini }) => (mini ? 'block' : 'flex')};
  flex-flow: column nowrap;
  height: ${({ mini }) => (mini ? '5rem' : '100%')};
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: ${({ mini }) => (mini ? 'absolute' : 'relative')};
  right: 0;
  top: 0;
  transition: all 0.5s var(--bezier-transition);
  z-index: 10;
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
  transition: all 0.5s var(--bezier-transition);
  width: 100%;
`;

export const Banner = styled.div<{ bgImage: string; mini: boolean; fixed: boolean }>`
  align-items: stretch;
  background-color: var(--white);
  display: flex;
  flex-flow: row nowrap;
  height: ${({ mini }) => (mini ? 5 : 20)}rem;
  justify-content: stretch;
  position: ${({ mini, fixed }) => (fixed ? 'fixed' : mini ? 'absolute' : 'relative')};
  top: 0;
  transition: all 0.5s var(--bezier-transition);
  width: ${({ mini }) => (mini ? 100 : 75)}vw;
  z-index: 0;

  &::after {
    background: ${({ bgImage }) =>
      bgImage === '' ? 'transparent' : `url(${bgImage}) center / cover no-repeat scroll`};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    ${({ bgImage }) => bgImage && animateImageCss}
  }

  @media screen and (max-width: 54rem) {
    width: 100vw;
  }
`;

export const CenterText = styled.div<{ mini: boolean }>`
  ${({ mini }) => (mini ? whiteBg : transparentBg)};
  align-items: center;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  position: relative;
  transition: all 0.5s var(--bezier-transition);
  z-index: 10;

  &::before {
    ${({ mini }) => mini && transparentBg}
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
`;

export const Name = styled.h1<{ mini: boolean }>`
  color: var(--white);
  font: 700 ${({ mini }) => (mini ? 2.8 : 12)}rem 'Open Sans', sans-serif;
  margin: 0;
  position: relative;
  top: ${({ mini }) => (mini ? 2.2 : 7.5)}rem;
  transition: all 0.5s var(--bezier-transition);

  @media screen and (max-width: 56.8rem) {
    font-size: ${({ mini }) => (mini ? 2.8 : 8)}rem;
    top: ${({ mini }) => (mini ? 2.3 : 11.5)}rem;
  }
  @media screen and (max-width: 35rem) {
    font-size: ${({ mini }) => (mini ? 2.8 : 6)}rem;
    top: ${({ mini }) => (mini ? 2.3 : 13.75)}rem;
  }
`;

export const Now = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.4rem;
  justify-content: center;
  margin-top: 1rem;
  ${AutoSeperator};
`;

export const Details = styled.div<{ mini: boolean }>`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 4rem;
  justify-content: space-between;
  position: relative;
  top: ${({ mini }) => (mini ? -3.25 : 5)}rem;
  transition: all 0.5s var(--bezier-transition);
  @media screen and (max-width: 56.8rem) {
    top: ${({ mini }) => (mini ? -2.8 : 10)}rem;
  }
  @media screen and (max-width: 35rem) {
    top: ${({ mini }) => (mini ? -2.8 : 12.5)}rem;
  }
`;
