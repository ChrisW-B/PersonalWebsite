import { graphql } from 'react-apollo';

import gql from 'graphql-tag';

import { Technologies } from '@components/Info/Sections';

const query = gql`
  {
    skills {
      category
      types
    }
  }
`;

export default graphql(query)(Technologies);
