import * as React from 'react';
import Markdown from 'react-markdown';

import { useBioQuery } from '@queries/bio.generated';
import { DetailContent, DetailHeader, DetailWrapper, Link, Overview } from '@styles/details';

import Experience from './experience';
import Projects from './projects';

const Details: React.FC = () => {
  const { data } = useBioQuery();

  return (
    <DetailWrapper>
      <DetailHeader>About</DetailHeader>
      <DetailContent>
        <Markdown
          components={{
            p: (props) => <Overview {...props} />,
            a: (props) => <Link target='_blank' rel='noopener noreferrer' {...props} />,
          }}
        >
          {data?.bio ?? ''}
        </Markdown>
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
