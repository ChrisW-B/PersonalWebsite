// react/components/Sidenav/Sidenav.js

import React, { Component } from 'react';
import { TwitterWidget, LastFmWidget, SidenavLink } from './';

export default class Sidenav extends Component {

  state = {
    feature_image: '',
    title: '',
    url: ''
  }

  sidenavElements = [
    { link: 'mailto:me@chriswbarry.com', title: 'Get in Touch!' },
    { link: '//github.com/ChrisW-B/', title: 'Github' },
    { link: '//keybase.io/chriswb', title: 'Keybase' },
    { link: '//linkedin.com/in/chriswbarry', title: 'LinkedIn' },
    { link: '//photo.chriswbarry.com/', title: 'Photography' }
  ]

  componentDidMount = () => this.getBackground();

  getBackground = async() => {
    let bgJson;
    try {
      bgJson = await (await fetch('/bg')).json();
      if (!bgJson.success) throw new Error(bgJson.e);
      this.setState({ ...bgJson });
    } catch (error) {
      return;
    }
  }

  render = () => {
    const { feature_image = '', title = '', url = '' } = this.state;
    return (
      <div className='sidenav'>
        <ul>
          <li>
            <h1>Chris Barry</h1>
          </li>
          {
            this.sidenavElements.map(e=> <SidenavLink key={e.link} {...e}/>)
          }
          <TwitterWidget />
          <LastFmWidget />

        </ul>
        <div className='tumblr-widget widget descrip photo-descrip'>
          <a href={url}>Background: <br/> {title}</a>
        </div>
        <div
          className={`bg-image ${feature_image ? 'image' : 'empty'} `}
          style={{backgroundImage: `url(${feature_image})`}}
        />
      </div>
    );
  }

}