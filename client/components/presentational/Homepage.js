// react/components/Homepage/Homepage.js
import React from 'react';
import { SidenavContainer } from '../containers';
import Info from './Info';
import { HomepageDiv } from '../styles/Homepage';

const Homepage = () => (
  <HomepageDiv>
    <SidenavContainer />
    <Info />
  </HomepageDiv>
);

export default Homepage;