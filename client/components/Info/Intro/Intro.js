// react/components/Intro/Intro.js
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import { PropTypes } from 'prop-types';
import { HiMessage, InfoSubSection } from './Intro.style';

const Intro = ({ data: { bio } }) => (
  <InfoSubSection>
    <HiMessage>Hi!</HiMessage>
    <p>
      {bio}
    </p>
  </InfoSubSection>
);

Intro.propTypes = { data: PropTypes.shape({ bio: PropTypes.string }) };
Intro.defaultProps = { data: { body: `` } };

export default graphql(gql`
  {
    bio
  }
`)(Intro);

// export default Intro;