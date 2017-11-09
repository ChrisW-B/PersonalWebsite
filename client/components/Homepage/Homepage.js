// react/components/Homepage/Homepage.js
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PropTypes } from "prop-types";
import React from 'react';
// import Sidenav from '../Sidenav';
// import Info from '../Info';
// import { HomepageDiv } from './Homepage.style';

const Homepage = ({ data: { bio, lastfm: { nowplaying } } }) => (
  <div>
    {/* <Sidenav />
    <Info /> */}
    <p>{bio}</p>
    {nowplaying ? <p>{nowplaying.title} by {nowplaying.artist}</p> : null}
  </div>
);
Homepage.propTypes = { data: PropTypes.shape({ bio: PropTypes.string }) };
Homepage.defaultProps = { data: { body: `` } };

// export default Homepage;

export default graphql(gql `
  {
    bio
    lastfm {
      nowplaying {
        title
        artist
      }
    }
  }
`, { options: { pollInterval: 5000 } })(Homepage);