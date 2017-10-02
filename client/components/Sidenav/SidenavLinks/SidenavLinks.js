import React from 'react';
import SidenavLink from '../SidenavLink';
import SidenavLinkList from './SidenavLinkList';

const SidenavLinks = () => (
  SidenavLinkList.map(i =>
    <SidenavLink key={i.link} {...i} />
  )
);

export default SidenavLinks;