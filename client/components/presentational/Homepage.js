// react/components/Homepage/Homepage.js
import React from 'react';
import { SidenavContainer } from '../containers';
import Info from './Info';
import CSSResets from './cssResets';
import HomepageDiv from '../styles/Homepage';

const Homepage = () => (
  <HomepageDiv>
    <CSSResets />
    <SidenavContainer />
    <Info />
  </HomepageDiv>
);

export default Homepage;
