import React from 'react';
import SidenavLink from '../SidenavLink';
import SidenavLinkList from './SidenavLinkList';

const SidenavLinks = ({ data }) => {
  const List = SidenavLinkList(data);
  return (
    List.map(link =>
      <SidenavLink key={link.link} {...link} />
    )
  );
};

export default SidenavLinks;