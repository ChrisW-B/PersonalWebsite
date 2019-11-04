import React from 'react';
import { hot } from 'react-hot-loader/root';

import Content from '@components/Content';
import CSSResets from '@components/cssResets';
import Sidenav from '@components/Sidenav';
import HomepageDiv from '@styles/Homepage';

// const Content = React.lazy(() => import(/* webpackChunkName: "Content" */ '@components/Content'));
// const Sidenav = React.lazy(() => import(/* webpackChunkName: "Sidenav" */ '@components/Sidenav'));

const Homepage = () => (
  <>
    <CSSResets />
    <HomepageDiv>
      <Sidenav />
      <Content />
    </HomepageDiv>
  </>
);

export default hot(Homepage);
