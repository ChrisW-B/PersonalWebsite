import { graphql } from 'react-apollo';

import gql from 'graphql-tag';

import Intro from '@components/Info/Intro';

const query = gql`
  {
    bio
  }
`;

export default graphql(query)(Intro);
