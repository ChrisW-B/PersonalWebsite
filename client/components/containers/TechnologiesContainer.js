import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Technologies } from '../presentational/Info/DetailSections/Sections';

const query = gql `
  {
    skills {
      category types
    }
  }
`;

export default graphql(query)(Technologies);