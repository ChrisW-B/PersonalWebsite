import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Interests } from '../presentational/Info/Sections';

const query = gql`
  {
    interests
  }
`;

export default graphql(query)(Interests);