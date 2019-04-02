import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import SidenavLinks from '../presentational/Sidenav/SidenavLinks';

const query = gql`
  {
    email
    twitter {
      url
    }
    github {
      url
    }
    linkedin {
      url
    }
    lastfm {
      url
    }
    photoBlog {
      url
    }
  }
`;

export default graphql(query)(SidenavLinks);
