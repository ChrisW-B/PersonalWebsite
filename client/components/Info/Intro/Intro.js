// react/components/Intro/Intro.js
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import Markdown from 'react-remarkable';
import { PropTypes } from 'prop-types';
import { HiMessage, InfoSubSection } from './Intro.style';

const query = gql `
  {
    bio
  }
`;

const Intro = ({ data: { bio } }) => (
  <InfoSubSection>
    <HiMessage>Hi!</HiMessage>
    <Markdown source={bio} />
  </InfoSubSection>
);

Intro.propTypes = { data: PropTypes.shape({ bio: PropTypes.string }) };
Intro.defaultProps = { data: { body: `` } };

export default graphql(query)(Intro);