import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import LearnMore from '../presentational/Info/LearnMore';

const query = gql`
  {
    email
    resume {
      pdf
    }
  }
`;

export default graphql(query)(LearnMore);
