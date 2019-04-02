import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Intro from '../presentational/Info/Intro';

const query = gql`
  {
    bio
  }
`;

export default graphql(query)(Intro);
