import React from 'react';
import { PropTypes } from 'prop-types';

import { Link, SidenavItem } from '@styles/Sidenav';

const SidenavLink = ({ link, title, widget: Widget = null, emphasis }) => (
  <SidenavItem emphasis={emphasis}>
    <Link href={link} title={title}>
      {title}
    </Link>
    {Widget && <Widget />}
  </SidenavItem>
);

SidenavLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  widget: PropTypes.element,
  emphasis: PropTypes.bool,
};

SidenavLink.defaultProps = {
  widget: null,
  emphasis: false,
};

export default SidenavLink;
