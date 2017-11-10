// react/components/Sidenav/Sidenav.js
import React from 'react';
import { PropTypes } from 'prop-types';
import { SidenavLinksContainer } from '../../containers';
import { Name, PhotoDescription, SidenavContainer, SidenavItems } from '../../styles/Sidenav';

const Sidenav = ({ photo: { photo, title, url } }) => (
  <SidenavContainer bg={photo}>
    <SidenavItems>
      <li>
        <Name>Chris Barry</Name>
      </li>
      <SidenavLinksContainer />
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

export default Sidenav;