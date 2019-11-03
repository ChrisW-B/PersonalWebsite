import React from 'react';
import { hot } from 'react-hot-loader/root';

import Content from '@components/Content';
import CSSResets from '@components/cssResets';
import Sidenav from '@components/Sidenav';
import HomepageDiv from '@styles/Homepage';

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
