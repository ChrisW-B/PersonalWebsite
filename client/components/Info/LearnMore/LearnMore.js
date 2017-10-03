// react/components/Intro/Intro.js

import React, { Component } from 'react';
import { LearnMoreSection, Link } from './LearnMore.style';

export default class LearnMore extends Component {
  render = () =>
    (<LearnMoreSection>
      <h3> Want to know more?</h3>
      <p><Link className='button' href='/files/ChrisBarry_Resume.pdf' title=''>Download my Resume</Link> or <Link className='button' href='mailto:me@chriswbarry.com'>Email Me!</Link></p>
    </LearnMoreSection>)
}