// react/components/Intro/Intro.js

import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PropTypes } from 'prop-types';
import { LearnMoreSection, Link } from './LearnMore.style';

const query = gql `
  {
    email
    resume {
      pdf
    }
  }
`;

const LearnMore = ({ data: { email, resume: { pdf } } }) => (
  <LearnMoreSection>
    <h3>Want to know more?</h3>
    <p><Link href={pdf} title=''>Download my Resume</Link> or <Link href={`mailto:${email}`}>Email Me!</Link></p>
  </LearnMoreSection>
);
LearnMore.propTypes = { data: PropTypes.shape({ email: PropTypes.string, resume: PropTypes.object }) };
LearnMore.defaultProps = { data: { email: ``, resume: { pdf: `` } } };

export default graphql(query)(LearnMore);