import { graphql } from 'react-apollo';

import gql from 'graphql-tag';

import LearnMore from '@components/Content/LearnMore';

const query = gql`
  {
    email
    resume {
      pdf
    }
  }
`;

export default graphql(query)(LearnMore);
