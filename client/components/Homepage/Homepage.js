// react/components/Homepage/Homepage.js

import React from 'react';
import { Sidenav, Info } from '..';
import { HomepageDiv } from './Homepage.style';

const Homepage = () => (
  <HomepageDiv>
    <Sidenav />
    <Info />
  </HomepageDiv>
);

export default Homepage;