import React from 'react';
import { useQuery } from 'react-apollo';

import { GithubWidget, LastFmWidget, TwitterWidget } from '@components/Sidenav/Widgets';
import sidenavQuery from '@queries/sidenav.gql';

import SidenavLink from '../SidenavLink';

const SidenavLinks = () => {
  const { data, loading } = useQuery(sidenavQuery);
  return !loading ? (
    <>
      <SidenavLink title='Get in Touch' link={`mailto:${data.email}`} emphasis />
      <SidenavLink title='Github' link={data.github.url} widget={GithubWidget} />
      <SidenavLink title='Twitter' link={data.twitter.url} widget={TwitterWidget} />
      <SidenavLink title='LastFM' link={data.lastfm.url} widget={LastFmWidget} />
      <SidenavLink title='LinkedIn' link={data.linkedin.url} />
      <SidenavLink title='Photos' link={data.photoBlog.url} />
    </>
  ) : null;
};

export default SidenavLinks;
