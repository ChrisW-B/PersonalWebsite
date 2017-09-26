// react/components/Sidenav/Sidenav.js

import React, { Component } from 'react';
import Mail from 'react-icons/lib/io/android-mail';
import LinkedInLogo from 'react-icons/lib/io/social-linkedin';
import Camera from 'react-icons/lib/io/camera';
import { TwitterWidget, LastFmWidget, SidenavLink, GithubWidget } from './';

export default class Sidenav extends Component {

  state = {
    feature_image: '',
    title: '',
    url: ''
  }

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

  sidenavElements = [
    { title: 'Get in Touch', link: 'mailto:me@chriswbarry.com', icon: <Mail />, emphasis: true },
    { title: 'Github', link: '//github.com/chrisw-b', widget: <GithubWidget /> },
    { title: 'Twitter', link: '//twitter.com/chrisw_b', widget: <TwitterWidget /> },
    { title: 'LastFM', link: '//last.fm/christo27', widget: <LastFmWidget /> },
    { title: 'LinkedIn', link: '//linkedin.com/in/chriswbarry', icon: <LinkedInLogo /> },
    { title: 'Photography', link: '//photo.chriswbarry.com/', icon: <Camera /> }

  ]

  render = () => {
    const { feature_image = '', title = '', url = '' } = this.state;
    return (
      <div className='sidenav'>
        <ul>
          <li>
            <h1>Chris Barry</h1>
          </li>
          {
            this.sidenavElements.map(e => <SidenavLink key={e.link} {...e} />)
          }
        </ul>
        <div className='tumblr-widget widget descrip photo-descrip'>
          <a href={url}>Background: <br /> {title}</a>
        </div>
        <div
          className={`bg-image ${feature_image ? 'image' : 'empty'} `}
          style={{backgroundImage: `url(${feature_image})`}}
        />
      </div>
    );
  }

}