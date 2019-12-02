import React from 'react';
import Markdown from 'react-markdown';

import { useBioQuery } from '@schema/queries/bio.generated';
import { DetailContent, DetailHeader, DetailWrapper, Overview } from '@styles/details';

import { Experience } from './experience';

export const Description = () => {
  const { loading, data } = useBioQuery();

  return (
    <DetailWrapper>
      <DetailHeader>About</DetailHeader>
      <DetailContent>
        <Markdown
          source={loading ? '' : data.bio}
          renderers={{ paragraph: ({ children }) => <Overview>{children}</Overview> }}
        />
      </DetailContent>

      <DetailHeader>Experience</DetailHeader>
      <DetailContent>
        <Experience />
      </DetailContent>
    </DetailWrapper>
  );
};
