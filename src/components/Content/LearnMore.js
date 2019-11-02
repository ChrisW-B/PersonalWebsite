import React from 'react';
// react/components/Intro/Intro.js
import { PropTypes } from 'prop-types';

import { LearnMoreSection, Link } from '@styles/Info';

const LearnMore = ({ data: { email = ``, resume = { pdf: `` } } }) => (
  <LearnMoreSection>
    <h3>Want to know more?</h3>
    <p>
      <Link href={resume.pdf} title=''>
        Download my Resume
      </Link>
      or
      <Link href={`mailto:${email}`}>Email Me!</Link>
    </p>
  </LearnMoreSection>
);
LearnMore.propTypes = {
  data: PropTypes.shape({ email: PropTypes.string, resume: PropTypes.object }),
};
LearnMore.defaultProps = { data: { email: ``, resume: { pdf: `` } } };

export default LearnMore;
