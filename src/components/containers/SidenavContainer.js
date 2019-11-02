import { graphql } from 'react-apollo';

import gql from 'graphql-tag';

import { Sidenav } from '@components/Sidenav';

const query = gql`
  {
    photoBlog {
      photos(limit: 10) {
        url
        title
        photo
      }
    }
  }
`;

const queryOptions = {
  // override the defaults to select a random photo
  options: { ssr: false },
  displayName: `Sidenav-Query`,
  props: ({ data }) => {
    if (!data.photoBlog) return data;
    const {
      photoBlog: { photos = [] },
    } = data;
    return photos.length > 0
      ? { photo: photos[Math.floor(Math.random() * (photos.length - 1))] }
      : null;
  },
};
export default graphql(query, queryOptions)(Sidenav);
