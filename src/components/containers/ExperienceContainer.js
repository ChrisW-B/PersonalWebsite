import { graphql } from 'react-apollo';

import gql from 'graphql-tag';

import { Experience } from '@components/Content/Sections';

const query = gql`
  {
    jobs {
      title
      company
      details
      when {
        start
        end
      }
    }
  }
`;

export default graphql(query)(Experience);
