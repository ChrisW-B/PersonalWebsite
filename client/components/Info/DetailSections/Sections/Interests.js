// react/components/Interests/Interests.js
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import { SectionContentP } from './Sections.style';

const query = gql `
  {
    interests
  }
`;

const Interests = ({ data: { interests } }) =>
  <SectionContentP>{interests}</SectionContentP>;
Interests.propTypes = { data: PropTypes.shape({ interests: PropTypes.string }) };
Interests.defaultProps = { data: { interests: `` } };

export default graphql(query)(Interests);