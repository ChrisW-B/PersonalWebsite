import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';

import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import Description from '@components/details';
import IntroBanner from '@components/introBanner';
import { NightModeContext } from '@contexts/nightMode';
import globalStyles from '@styles/global';
import { PageGrid } from '@styles/homepage';

const mode = (isLight: boolean, color: string) => `--${isLight ? 'light' : 'dark'}-mode-${color}`;

const NightModeStyles = styled.div<{ isLightMode: boolean }>`
  --cyan: var(${props => mode(props.isLightMode, 'cyan')});
  --cyan-70: var(${props => mode(props.isLightMode, 'cyan-70')});
  --dark: var(${props => mode(props.isLightMode, 'dark')});
  --light-grey: var(${props => mode(props.isLightMode, 'light-grey')});
  --light-grey-00: var(${props => mode(props.isLightMode, 'light-grey-00')});
  --link-blue: var(${props => mode(props.isLightMode, 'link-blue')});
  --rose: var(${props => mode(props.isLightMode, 'rose')});
  --rose-50: var(${props => mode(props.isLightMode, 'rose-50')});
  --white: var(${props => mode(props.isLightMode, 'white')});
  --white-00: var(${props => mode(props.isLightMode, 'white-00')});

  background-color: var(--white);
  color: var(--dark);
  transition: all 0.5s var(--bezier-transition);
`;

export default () => {
  const [inViewReference, inView] = useInView({ rootMargin: '-300px 0px 0px' });
  const [isLightMode] = useContext(NightModeContext);
  return (
    <NightModeStyles isLightMode={isLightMode}>
      <Global styles={globalStyles} />
      <PageGrid>
        <div>
          <IntroBanner mini={!inView} />
        </div>
        <div ref={inViewReference} />
        <div>
          <Description />
        </div>
      </PageGrid>
    </NightModeStyles>
  );
};
