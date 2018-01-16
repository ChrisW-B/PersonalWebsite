import React from 'react';
import SidenavLink from '../SidenavLink';
import SidenavLinkList from './SidenavLinkList';

const SidenavLinks = ({ data }) => (
  SidenavLinkList(data).map(link =>
    <SidenavLink key={link.title} {...link} />,
  )
);

export default SidenavLinks;