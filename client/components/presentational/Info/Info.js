// react/components/Info/Info.js
import React from 'react';

import { IntroContainer, LearnMoreContainer } from '../../containers';
import { InfoSection, ProfilePhoto } from '../../styles/Info';
import { DetailSections } from '.';

const Info = () => (
  <InfoSection>
    <ProfilePhoto src='/images/prof.jpg' alt='Profile' />
    <IntroContainer />
    <DetailSections />
    <LearnMoreContainer />
  </InfoSection>
);

export default Info;
