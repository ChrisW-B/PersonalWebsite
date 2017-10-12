// react/components/Homepage/Homepage.js

import React from 'react';
import Sidenav from '../Sidenav';
import Info from '../Info';
import { HomepageDiv } from './Homepage.style';

const Homepage = () => (
  <HomepageDiv>
    <Sidenav />
    <Info />
  </HomepageDiv>
);

export default Homepage;