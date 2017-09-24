// react/components/Intro/Intro.js

import React, { Component } from 'react';

export default class LearnMore extends Component {
  render = () =>
    (<div className='learn-more'>
      <h3> Want to know more?</h3>
      <p>
        <a className='button' href='/files/ChrisBarry_Resume.pdf' title=''>Download my Resume</a> or <a className='button' href='mailto:me@chriswbarry.com'>Email Me!</a>
      </p>
    </div>)

}