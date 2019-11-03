import React from 'react';

import DetailSections from '@components/Content/DetailSections';
import Intro from '@components/Content/Intro';
import LearnMore from '@components/Content/LearnMore';
import ProfilePic from '@public/images/prof.jpg';
import { InfoSection, ProfilePhoto } from '@styles/Info';

const Content = () => (
  <InfoSection>
    <ProfilePhoto src={ProfilePic} alt='Profile' />
    <Intro />
    <DetailSections />
    <LearnMore />
  </InfoSection>
);

export default Content;
