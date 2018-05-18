import { PropTypes } from 'prop-types';
import React from 'react';
import { SidenavItem, Icon, Link } from '../../styles/Sidenav';

const SidenavLink = ({
  link, title, widget = null, icon, emphasis,
}) => (
  <SidenavItem emphasis={emphasis}>
    <Link href={link} title={title}>
      <Icon>{icon}</Icon>{title}
    </Link>
    {widget}
  </SidenavItem>
);

SidenavLink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  widget: PropTypes.node,
  icon: PropTypes.node,
  emphasis: PropTypes.bool,
};

SidenavLink.defaultProps = {
  link: ``,
  title: ``,
  widget: null,
  icon: null,
  emphasis: false,
};

export default SidenavLink;