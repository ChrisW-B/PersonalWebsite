import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import GithubWidget from '../presentational/Sidenav/Widgets/GithubWidget';

const query = gql `
  {
    github {
      commits(limit: 1) {
        url author name time reltime message
      }
    }
  }
`;

const queryOptions = {
  options: {
    pollInterval: 1000 * 60 * 10,
    ssr: false
  }
};

export default graphql(query, queryOptions)(GithubWidget);