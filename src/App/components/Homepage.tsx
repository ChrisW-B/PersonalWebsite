import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Description } from '@components/description';
import { IntroBanner } from '@components/introBanner';
import { PageGrid } from '@styles/homepage.ts';

export const Homepage = () => {
  const [inViewReference, inView] = useInView({ rootMargin: '-250px 0px 0px' });
  return (
    <PageGrid>
      <div>
        <IntroBanner mini={!inView} />
      </div>
      <div ref={inViewReference} />
      <div>
        <Description />
      </div>
    </PageGrid>
  );
};
