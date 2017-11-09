// react/components/Sidenav/Sidenav.js
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import { PropTypes } from 'prop-types';
import { SidenavLinks } from './';
import { Name, PhotoDescription, SidenavContainer, SidenavItems } from './Sidenav.style';

const query = gql `
  {
    photoBlog {
      photos(limit: 10) {
        url title photo
      }
    }
  }
`;

const queryOptions = {
  // override the defaults to select a random photo
  props: ({ data }) => {
    if (data.loading) return data;
    const { photoBlog: { photos } } = data;
    return ({ photo: photos[Math.floor(Math.random() * (photos.length - 1))] });
  }
};

const Sidenav = ({ photo: { photo, title, url } }) => (
  <SidenavContainer bg={photo}>
    <SidenavItems>
      <li>
        <Name>Chris Barry</Name>
      </li>
      <SidenavLinks />
    </SidenavItems>
    <PhotoDescription>
      <a href={url}>Background: <br /> {title}</a>
    </PhotoDescription>
  </SidenavContainer>
);

Sidenav.propTypes = {
  photo: PropTypes.shape({
    photo: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
  })
};
Sidenav.defaultProps = {
  photo: { photo: ``, title: ``, url: `` }
};

export default graphql(query, queryOptions)(Sidenav);