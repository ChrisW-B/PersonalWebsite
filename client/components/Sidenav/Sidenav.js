// react/components/Sidenav/Sidenav.js

import React, { Component } from 'react';
import { SidenavLinks } from './';
import { Name, PhotoDescription, SidenavBackground, SidenavContainer, SidenavItems } from './Sidenav.style';

export default class Sidenav extends Component {
  state = {
    photo: ``,
    title: ``,
    url: ``
  }

  componentDidMount = () => this.getBackground();

  getBackground = async () => {
    try {
      const bgJson = await (await fetch(`/bg`)).json();
      if (!bgJson.success) throw new Error(bgJson.e);
      this.setState({ ...bgJson });
    } catch (error) {
      console.log({ error });
    }
  }

  render = () => {
    const { photo = ``, title = ``, url = `` } = this.state;
    return (
      <SidenavContainer>
        <SidenavItems>
          <li>
            <Name>Chris Barry</Name>
          </li>
          <SidenavLinks />
        </SidenavItems>
        <PhotoDescription>
          <a href={url}>Background: <br /> {title}</a>
        </PhotoDescription>
        <SidenavBackground bg={photo} />
      </SidenavContainer>
    );
  }
}