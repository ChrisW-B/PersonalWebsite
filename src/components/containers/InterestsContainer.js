import { graphql } from 'react-apollo';

import gql from 'graphql-tag';

import { Interests } from '@components/Content/Sections';

const query = gql`
  {
    interests
  }
`;

export default graphql(query)(Interests);
