import React from 'react';
import SidenavLink from '../SidenavLink';
import SidenavLinkList from './SidenavLinkList';

export default ({ data }) => SidenavLinkList(data).map(link => <SidenavLink key={link.title} {...link} />);
