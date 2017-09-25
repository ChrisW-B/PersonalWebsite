// react/components/Homepage/Homepage.js

import React, { Component } from 'react';
import { Sidenav, Info } from '..';

export default class Homepage extends Component {
  render = () =>
    (<div className='homepage'>
      <Sidenav />
      <Info />
    </div>)

}