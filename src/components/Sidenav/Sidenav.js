// react/components/Sidenav/Sidenav.js
import React from 'react';
import { PropTypes } from 'prop-types';

import { Name, PhotoDescription, SidenavContainer, SidenavItems } from '@styles/Sidenav';

import SidenavLinks from './SidenavLinks';

const Sidenav = ({ photo: { photo = ``, title = ``, url = `` } }) => (
  <SidenavContainer bg={photo}>
    <SidenavItems>
      <li>
        <Name>Chris Barry</Name>
      </li>
      <SidenavLinks />
    </SidenavItems>
    <PhotoDescription>
      {title ? (
        <a href={url}>
          Background:
          <br />
          {title}
        </a>
      ) : null}
    </PhotoDescription>
  </SidenavContainer>
);

Sidenav.propTypes = {
  photo: PropTypes.shape({
    photo: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }),
};
Sidenav.defaultProps = {
  photo: { photo: ``, title: ``, url: `` },
};

export default Sidenav;
