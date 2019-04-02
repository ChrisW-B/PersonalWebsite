import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Technologies } from '../presentational/Info/Sections';

const query = gql`
  {
    skills {
      category
      types
    }
  }
`;

export default graphql(query)(Technologies);
