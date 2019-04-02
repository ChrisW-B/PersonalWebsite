// react/components/Homepage/Homepage.js
import React from 'react';

import { SidenavContainer } from '../containers';
import HomepageDiv from '../styles/Homepage';
import CSSResets from './cssResets';
import Info from './Info';

const Homepage = () => (
  <HomepageDiv>
    <CSSResets />
    <SidenavContainer />
    <Info />
  </HomepageDiv>
);

export default Homepage;
