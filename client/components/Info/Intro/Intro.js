// react/components/Intro/Intro.js

import React from 'react';
import { HiMessage, InfoSubSection } from './Intro.style';

const Intro = () => (
  <InfoSubSection>
    <HiMessage>Hi!</HiMessage>
    <p>
      <strong>I&#39;m a web developer from NYC, focusing on Node, Javascript and React. I love learning the newest technologies to create great web experiences.</strong> Most recently, I worked at <strong>Kip</strong>, where I worked on a Slack bot and later worked in a team creating an entirely new frontend in React.
    </p>
  </InfoSubSection>
);

export default Intro;