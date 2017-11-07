// react/components/Sidenav/Sidenav.js

import React, { Component } from 'react';
import { SidenavLinks } from './';
import { Name, PhotoDescription, SidenavContainer, SidenavItems } from './Sidenav.style';
import query from '../queries';

export default class Sidenav extends Component {
  state = {
    photo: ``,
    title: ``,
    url: ``
  }

  componentDidMount = () => this.getBackground();

  getBackground = async () => {
    const { photoBlog: { photos } } = await query(`{photoBlog{photos(limit:10){url photo html title}}}`);
    this.setState(() => ({ ...photos[Math.floor(Math.random() * (photos.length - 1))] }));
  }

  render = () => {
    const { photo = ``, title = ``, url = `` } = this.state;
    return (
      <SidenavContainer bg={photo}>
        <SidenavItems>
          <li>
            <Name>Chris Barry</Name>
          </li>
          <SidenavLinks />
        </SidenavItems>
        <PhotoDescription>
          <a href={url}>Background: <br /> {title}</a>
        </PhotoDescription>
      </SidenavContainer>
    );
  }
}