import React from 'react';

import { useLinksQuery } from '@schema/queries/links.generated';
import { Link, LinkList } from '@styles/links';

interface OwnProps {
  mini: boolean;
}

const linkGradient = ['#00c3d8', '#2f9cb3', '#5d758d', '#8c4e68', '#ba2742'];

export const Links: React.FC<OwnProps> = ({ mini }) => {
  const { data } = useLinksQuery();
  if (!data) return null;
  return (
    <LinkList mini={mini}>
      <li>
        <Link
          href={data?.github?.url}
          target='_blank'
          rel='noopener noreferrer'
          title='Github'
          bgColor={linkGradient[0]}>
          Github
        </Link>
      </li>
      <li>
        <Link
          href={data?.linkedin?.url}
          target='_blank'
          rel='noopener noreferrer'
          title='LinkedIn'
          bgColor={linkGradient[1]}>
          LinkedIn
        </Link>
      </li>
      <li>
        <Link
          href={data?.twitter?.url}
          target='_blank'
          rel='noopener noreferrer'
          title='Twitter'
          bgColor={linkGradient[2]}>
          Twitter
        </Link>
      </li>
      <li>
        <Link
          href={data?.photoBlog?.url}
          target='_blank'
          rel='noopener noreferrer'
          title='Photography'
          bgColor={linkGradient[3]}>
          Photography
        </Link>
      </li>
      <li>
        <Link
          href={data?.lastfm?.url}
          target='_blank'
          rel='noopener noreferrer'
          title='LastFM'
          bgColor={linkGradient[4]}>
          LastFM
        </Link>
      </li>
    </LinkList>
  );
};
