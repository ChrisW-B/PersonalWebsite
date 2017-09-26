import React from 'react';
import Mail from 'react-icons/lib/io/android-mail';
import LinkedInLogo from 'react-icons/lib/io/social-linkedin';
import Camera from 'react-icons/lib/io/camera';
import TwitterWidget from './TwitterWidget';
import GithubWidget from './GithubWidget';
import LastFmWidget from './LastFmWidget';

export default [
  { title: 'Get in Touch', link: 'mailto:me@chriswbarry.com', icon: <Mail />, emphasis: true },
  { title: 'Github', link: '//github.com/chrisw-b', widget: <GithubWidget /> },
  { title: 'Twitter', link: '//twitter.com/chrisw_b', widget: <TwitterWidget /> },
  { title: 'LastFM', link: '//last.fm/christo27', widget: <LastFmWidget /> },
  { title: 'LinkedIn', link: '//linkedin.com/in/chriswbarry', icon: <LinkedInLogo /> },
  { title: 'Photos', link: '//photo.chriswbarry.com/', icon: <Camera /> }
]