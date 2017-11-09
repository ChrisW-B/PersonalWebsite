import React from 'react';
import Mail from 'react-icons/lib/io/android-mail';
import LinkedInLogo from 'react-icons/lib/io/social-linkedin';
import Camera from 'react-icons/lib/io/camera';
import GitHubLogo from 'react-icons/lib/io/social-github';
import Music from 'react-icons/lib/io/radio-waves';
import TwitterLogo from 'react-icons/lib/io/social-twitter';
import { TwitterWidget, GithubWidget, LastFmWidget } from '../Widgets';

const links = ({ lastfm, email, github, twitter, linkedin, photoBlog }) => [
  { title: `Get in Touch`, link: `mailto:${email}`, icon: <Mail />, emphasis: true },
  { title: `Github`, link: github.url, icon: <GitHubLogo />, widget: <GithubWidget /> },
  { title: `Twitter`, link: twitter.url, icon: <TwitterLogo />, widget: <TwitterWidget /> },
  { title: `LastFM`, link: lastfm.url, icon: <Music />, widget: <LastFmWidget /> },
  { title: `LinkedIn`, link: linkedin.url, icon: <LinkedInLogo /> },
  { title: `Photos`, link: photoBlog.url, icon: <Camera /> }
];

export default links;