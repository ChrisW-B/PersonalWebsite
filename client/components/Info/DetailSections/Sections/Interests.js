// react/components/Interests/Interests.js
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import Markdown from 'react-markdown';
import { SectionContentP } from './Sections.style';

const query = gql `
  {
    interests
  }
`;

const Interests = ({ data: { interests } }) =>
  <Markdown disallowedTypes={[`Paragraph`, `div`]} unwrapDisallowed source={interests} escapeHtml containerTagName={SectionContentP} />;
Interests.propTypes = { data: PropTypes.shape({ interests: PropTypes.string }) };
Interests.defaultProps = { data: { interests: `` } };

export default graphql(query)(Interests);