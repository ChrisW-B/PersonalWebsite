// react/components/Info/index.js
import React from 'react';

import { IntroContainer, LearnMoreContainer } from '@components/containers';
import { InfoSection, ProfilePhoto } from '@styles/Info';

import DetailSections from './DetailSections';
import Intro from './Intro';
import LearnMore from './LearnMore';

const Content = () => (
  <InfoSection>
    <ProfilePhoto src='/images/prof.jpg' alt='Profile' />
    <IntroContainer />
    <DetailSections />
    <LearnMoreContainer />
  </InfoSection>
);

export default Content;
export { Intro, LearnMore };
