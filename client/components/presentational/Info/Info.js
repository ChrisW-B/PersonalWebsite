// react/components/Info/Info.js

import React from 'react';
import { DetailSections, LearnMore } from './';
import { IntroContainer } from '../../containers';
import { InfoSection, ProfilePhoto } from './Info.style';

const Info = () => (
  <InfoSection>
    <ProfilePhoto src='/images/prof.jpg' alt='Profile' />
    <IntroContainer />
    <DetailSections />
    <LearnMore />
  </InfoSection>
);

export default Info;