// react/components/Homepage/Homepage.js
import React from 'react';
import { hot } from 'react-hot-loader/root';

import { SidenavContainer } from '@components/containers';
import HomepageDiv from '@styles/Homepage';

import Content from './Content';
import CSSResets from './cssResets';

const Homepage = () => (
  <HomepageDiv>
    <CSSResets />
    <SidenavContainer />
    <Content />
  </HomepageDiv>
);

export default hot(Homepage);
