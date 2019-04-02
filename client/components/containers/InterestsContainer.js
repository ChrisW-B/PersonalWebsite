import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Interests } from '../presentational/Info/Sections';

const query = gql`
  {
    interests
  }
`;

export default graphql(query)(Interests);
