import { graphql } from 'react-apollo';

import gql from 'graphql-tag';

import { Technologies } from '@components/Content/Sections';

const query = gql`
  {
    skills {
      category
      types
    }
  }
`;

export default graphql(query)(Technologies);
