import React from 'react';
import Markdown from 'react-markdown';

import { useBioQuery } from '@schema/queries/bio.generated';
import { DetailWrapper } from '@styles/details';

export const Description = () => {
  const { loading, data } = useBioQuery();

  return (
    <DetailWrapper>
      <Markdown
        source={loading ? '' : data.bio}
        renderers={{ paragraph: ({ children }) => <p style={{ color: 'black' }}>{children}</p> }}
      />
      <div style={{ height: '10000px' }} />
    </DetailWrapper>
  );
};
