import * as React from 'react';
import { useInView } from 'react-intersection-observer';

import { Global } from '@emotion/react';

import Description from '@components/details';
import IntroBanner from '@components/introBanner';
import { NightModeProvider } from '@contexts/nightMode';
import globalStyles from '@styles/global';
import { PageGrid } from '@styles/homepage';

const Homepage: React.FC = () => {
  const [inViewReference, inView] = useInView({ rootMargin: '-300px 0px 0px' });
  return (
    <NightModeProvider>
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
    </NightModeProvider>
  );
};

export default Homepage;
