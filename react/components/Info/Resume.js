// react/components/Resume/Resume.js

import React, { Component } from 'react';
import { Intro, Interests, Projects, Experience, LearnMore } from './';

export default class Resume extends Component {
  render = () =>
    (<div className='resume'>
      <div className='inner-resume'>
        <div className='prof-pic'>
          <img src='/images/prof.jpg' alt='Profile' />
        </div>
        <div className='about-me'>
          <Intro />
          <Interests />
          <Projects />
          <Experience />
          <LearnMore />
        </div>
      </div>
    </div>)
}