// react/components/Info/Info.js

import React, { Component } from 'react';
import { Intro, DetailSections, LearnMore } from './';

export default class Info extends Component {
  render = () =>
    (<div className='info'>
      <div className='inner-info'>
        <div className='prof-pic'>
          <img src='/images/prof.jpg' alt='Profile' />
        </div>
        <div className='about-me'>
          <Intro />
          <DetailSections />
          <LearnMore />
        </div>
      </div>
    </div>)
}