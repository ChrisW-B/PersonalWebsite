import React from 'react';
import Markdown from 'react-markdown';

import { useBioQuery } from '@queries/bio.generated';
import { DetailContent, DetailHeader, DetailWrapper, Overview } from '@styles/details';

import Experience from './experience';
import Projects from './projects';

const Details: React.FC = () => {
  const { loading, data } = useBioQuery();

  return (
    <DetailWrapper>
      <DetailHeader>About</DetailHeader>
      <DetailContent>
        <Markdown
          source={loading ? '' : data?.bio || ''}
          renderers={{ paragraph: ({ children }) => <Overview>{children}</Overview> }}
        />
      </DetailContent>

      <DetailHeader>Experience</DetailHeader>
      <DetailContent>
        <Experience />
      </DetailContent>

      <DetailHeader>Projects</DetailHeader>
      <DetailContent>
        <Projects />
      </DetailContent>
    </DetailWrapper>
  );
};

export default Details;
