import React from 'react';
import { useQuery } from 'react-apollo';

import SidenavLink from '@components/Sidenav/SidenavLink';
import GithubWidget from '@components/Sidenav/Widgets/GithubWidget';
import LastFmWidget from '@components/Sidenav/Widgets/LastFmWidget';
import TwitterWidget from '@components/Sidenav/Widgets/TwitterWidget';
import sidenavQuery from '@queries/sidenav.gql';

const SidenavLinks = () => {
  const { data, loading, error } = useQuery(sidenavQuery);
  if (loading || error) return null;
  const { email, github, twitter, lastfm, linkedin, photoBlog } = data;
  return (
    <>
      <SidenavLink title='Get in Touch' link={`mailto:${email}`} emphasis />
      <SidenavLink title='Github' link={github.url} widget={GithubWidget} />
      <SidenavLink title='Twitter' link={twitter.url} widget={TwitterWidget} />
      <SidenavLink title='LastFM' link={lastfm.url} widget={LastFmWidget} />
      <SidenavLink title='LinkedIn' link={linkedin.url} />
      <SidenavLink title='Photos' link={photoBlog.url} />
    </>
  );
};

export default SidenavLinks;
