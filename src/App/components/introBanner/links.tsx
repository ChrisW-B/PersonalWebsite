import React from 'react';

import { useLinksQuery } from '@queries/links.generated';
import { Link, LinkList } from '@styles/links';
import gradientAtIndex from '@utils/gradientToHSL';

interface OwnProps {
  mini: boolean;
}

const targetBlank = { target: '_blank', rel: 'noopener noreferrer' };
const TOTAL_LINKS = 5;

export default (({ mini }) => {
  const { data } = useLinksQuery();
  if (!data) return null;
  return (
    <LinkList mini={mini}>
      <li>
        <Link
          href={data?.github?.url}
          {...targetBlank}
          title='Github'
          bgColor={gradientAtIndex(0, TOTAL_LINKS)}
        >
          Github
        </Link>
      </li>
      <li>
        <Link
          href={data?.linkedin?.url}
          {...targetBlank}
          title='LinkedIn'
          bgColor={gradientAtIndex(1, TOTAL_LINKS)}
        >
          LinkedIn
        </Link>
      </li>
      <li>
        <Link
          href={data?.twitter?.url}
          {...targetBlank}
          title='Twitter'
          bgColor={gradientAtIndex(2, TOTAL_LINKS)}
        >
          Twitter
        </Link>
      </li>
      <li>
        <Link
          href={data?.photoBlog?.url}
          {...targetBlank}
          title='Photography'
          bgColor={gradientAtIndex(3, TOTAL_LINKS)}
        >
          Photography
        </Link>
      </li>
      <li>
        <Link
          href={data?.lastfm?.url}
          {...targetBlank}
          title='LastFM'
          bgColor={gradientAtIndex(4, TOTAL_LINKS)}
        >
          LastFM
        </Link>
      </li>
      <li>
        <Link
          href='mailto:me@chriswbarry.com'
          {...targetBlank}
          title='Email'
          bgColor={gradientAtIndex(5, TOTAL_LINKS)}
        >
          Email
        </Link>
      </li>
    </LinkList>
  );
}) as React.FC<OwnProps>;
