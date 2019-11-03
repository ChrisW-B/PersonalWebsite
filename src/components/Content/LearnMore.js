import React from 'react';
import { useQuery } from 'react-apollo';

import learnMoreQuery from '@queries/learnMoreQuery.gql';
import { LearnMoreSection, Link } from '@styles/Info';

const LearnMore = () => {
  const { data, error, loading } = useQuery(learnMoreQuery);
  if (loading || error) return null;
  const { email = '', resume = { pdf: '' } } = data;
  return (
    <LearnMoreSection>
      <h3>Want to know more?</h3>
      <p>
        <Link href={resume.pdf} title='Resume'>
          Download my Resume
        </Link>
        or
        <Link href={`mailto:${email}`}>Email Me!</Link>
      </p>
    </LearnMoreSection>
  );
};

export default LearnMore;
