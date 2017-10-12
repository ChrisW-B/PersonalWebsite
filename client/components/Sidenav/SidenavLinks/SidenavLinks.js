import React from 'react';
import SidenavLink from '../SidenavLink';
import SidenavLinkList from './SidenavLinkList';

const SidenavLinks = () => (
  SidenavLinkList.map(link =>
    <SidenavLink key={link.link} {...link} />
  )
);

export default SidenavLinks;