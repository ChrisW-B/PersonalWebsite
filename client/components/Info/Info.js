// react/components/Info/Info.js

import React from 'react';
import { Intro, DetailSections, LearnMore } from './';
import { InfoSection, ProfilePhoto } from './Info.style';

const Info = () => (
  <InfoSection>
    <ProfilePhoto src='/images/prof.jpg' alt='Profile' />
    <div className='about-me'>
      <Intro />
      <DetailSections />
      <LearnMore />
    </div>
  </InfoSection>
);

export default Info;