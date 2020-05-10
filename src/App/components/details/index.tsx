import React from 'react';
import Markdown from 'react-markdown';

import { useBioQuery } from '@queries/bio.generated';
import { DetailContent, DetailHeader, DetailWrapper, Link, Overview } from '@styles/details';

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
          renderers={{
            paragraph: (props) => <Overview {...props} />,
            link: (props) => <Link target='_blank' rel='noopener noreferrer' {...props} />,
          }}
        />
      </DetailContent>

      <DetailHeader>Experience</DetailHeader>
      <DetailContent>
        <Experience />
      </DetailContent>

      <DetailHeader>Personal Projects</DetailHeader>
      <DetailContent>
        <Projects />
      </DetailContent>
    </DetailWrapper>
  );
};

export default Details;
