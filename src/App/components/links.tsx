import React from 'react';

import { useLinksQuery } from '@schema/queries/links.generated';
import { Link, LinkList } from '@styles/links';

interface OwnProps {
  mini: boolean;
}

export const Links: React.FC<OwnProps> = ({ mini }) => {
  const { data } = useLinksQuery();

  return (
    <LinkList mini={mini}>
      <li>
        <Link
          href={data?.github?.url}
          target='_blank'
          rel='noopener noreferrer'
          title='Github'
          bgColor='00c3d8'>
          Github
        </Link>
      </li>
      <li>
        <Link
          href={data?.linkedin?.url}
          target='_blank'
          rel='noopener noreferrer'
          title='LinkedIn'
          bgColor='2f9cb3'>
          LinkedIn
        </Link>
      </li>
      <li>
        <Link
          href={data?.twitter?.url}
          target='_blank'
          rel='noopener noreferrer'
          title='Twitter'
          bgColor='5d758d'>
          Twitter
        </Link>
      </li>
      <li>
        <Link
          href={data?.photoBlog?.url}
          target='_blank'
          rel='noopener noreferrer'
          title='Photography'
          bgColor='8c4e68'>
          Photography
        </Link>
      </li>
      <li>
        <Link
          href={data?.lastfm?.url}
          target='_blank'
          rel='noopener noreferrer'
          title='LastFM'
          bgColor='ba2742'>
          LastFM
        </Link>
      </li>
    </LinkList>
  );
};
