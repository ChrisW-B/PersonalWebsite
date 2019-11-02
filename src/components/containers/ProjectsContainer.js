import { graphql } from 'react-apollo';

import gql from 'graphql-tag';

import { Projects } from '@components/Content/Sections';

const query = gql`
  {
    projects {
      name
      description
      github
      website
      technologies
    }
  }
`;

export default graphql(query)(Projects);
