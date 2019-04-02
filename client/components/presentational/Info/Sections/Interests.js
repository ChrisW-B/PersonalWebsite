// react/components/Interests/Interests.js
import { PropTypes } from 'prop-types';
import React from 'react';
import Markdown from 'react-remarkable';
// import { SectionContentP } from '../../../styles/Sections';

const Interests = ({ data: { interests } }) => <Markdown>{interests}</Markdown>;
Interests.propTypes = { data: PropTypes.shape({ interests: PropTypes.string }) };
Interests.defaultProps = { data: { interests: `` } };

export default Interests;
