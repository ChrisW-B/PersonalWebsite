import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import LastFmWidget from '../presentational/Sidenav/Widgets/LastFmWidget';

const query = gql`
  {
    lastfm {
      nowplaying {
        title artist
      }
    }
  }
`;

const queryOptions = {
  options: {
    pollInterval: 1000 * 30,
    ssr: false,
  },
};

export default graphql(query, queryOptions)(LastFmWidget);