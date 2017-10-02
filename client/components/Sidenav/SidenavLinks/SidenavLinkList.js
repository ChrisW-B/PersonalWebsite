import React from 'react';
import Mail from 'react-icons/lib/io/android-mail';
import LinkedInLogo from 'react-icons/lib/io/social-linkedin';
import Camera from 'react-icons/lib/io/camera';
import GitHubLogo from 'react-icons/lib/io/social-github';
import Music from 'react-icons/lib/io/radio-waves';
import TwitterLogo from 'react-icons/lib/io/social-twitter';
import { TwitterWidget, GithubWidget, LastFmWidget } from '../Widgets';

export default [
  { title: `Get in Touch`, link: `mailto:me@chriswbarry.com`, icon: <Mail />, emphasis: true },
  { title: `Github`, link: `//github.com/chrisw-b`, icon: <GitHubLogo />, widget: <GithubWidget /> },
  { title: `Twitter`, link: `//twitter.com/chrisw_b`, icon: <TwitterLogo />, widget: <TwitterWidget /> },
  { title: `LastFM`, link: `//last.fm/christo27`, icon: <Music />, widget: <LastFmWidget /> },
  { title: `LinkedIn`, link: `//linkedin.com/in/chriswbarry`, icon: <LinkedInLogo /> },
  { title: `Photos`, link: `//photo.chriswbarry.com/`, icon: <Camera /> }
];