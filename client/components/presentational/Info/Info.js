// react/components/Info/Info.js
import React from 'react';
import { DetailSections } from ".";
import { IntroContainer, LearnMoreContainer } from '../../containers';
import { InfoSection, ProfilePhoto } from '../../styles/Info';

const Info = () => (
  <InfoSection>
    <ProfilePhoto src='/images/prof.jpg' alt='Profile' />
    <IntroContainer />
    <DetailSections />
    <LearnMoreContainer />
  </InfoSection>
);

export default Info;