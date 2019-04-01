// react/components/Intro/Intro.js
import { PropTypes } from 'prop-types';
import Markdown from 'react-remarkable';
import React from 'react';
import { HiMessage, InfoSubSection } from '../../styles/Info';

const Intro = ({ data: { bio } }) => (
  <InfoSubSection>
    <HiMessage>Hi!</HiMessage>
    <Markdown source={bio} />
  </InfoSubSection>
);

Intro.propTypes = { data: PropTypes.shape({ bio: PropTypes.string }) };
Intro.defaultProps = { data: { body: `` } };

export default Intro;
