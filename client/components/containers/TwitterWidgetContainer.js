import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import TwitterWidget from '../presentational/Sidenav/Widgets/TwitterWidget';

const query = gql`
  {
    twitter {
      tweets {
        message
        reltime
        url
      }
    }
  }
`;

const queryOptions = {
  options: {
    pollInterval: 1000 * 60 * 5,
    ssr: false
  }
};

export default graphql(query, queryOptions)(TwitterWidget);
