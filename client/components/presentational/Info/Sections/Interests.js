// react/components/Interests/Interests.js
import { PropTypes } from 'prop-types';
import Markdown from 'react-remarkable';
import React from 'react';
import { SectionContentP } from '../../../styles/Sections';

const Interests = ({ data: { interests } }) =>
  <SectionContentP><Markdown source={interests} /></SectionContentP>;
Interests.propTypes = { data: PropTypes.shape({ interests: PropTypes.string }) };
Interests.defaultProps = { data: { interests: `` } };

export default Interests;