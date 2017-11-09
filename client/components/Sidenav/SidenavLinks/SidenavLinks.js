import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SidenavLink from '../SidenavLink';
import SidenavLinkList from './SidenavLinkList';

const query = gql `
  {
    email
    twitter { url }
    github { url }
    linkedin { url }
    lastfm { url }
    photoBlog { url }
  }
`;

const SidenavLinks = ({ data }) => (
  SidenavLinkList(data).map(link =>
    <SidenavLink key={link.link} {...link} />
  )
);

export default graphql(query)(SidenavLinks);