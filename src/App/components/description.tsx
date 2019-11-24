import React from 'react';
import Markdown from 'react-markdown';

import { useBioQuery } from '@schema/queries/bio.generated';

export const Description = () => {
  const { loading, data } = useBioQuery();

  return (
    <>
      <Markdown
        source={loading ? '' : data.bio}
        renderers={{ paragraph: ({ children }) => <p style={{ color: 'red' }}>{children}</p> }}
      />
      <div style={{ height: '10000px' }} />
    </>
  );
};
