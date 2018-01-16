import React from 'react';
import Mail from 'react-icons/lib/io/android-mail';
import LinkedInLogo from 'react-icons/lib/io/social-linkedin';
import Camera from 'react-icons/lib/io/camera';
import GitHubLogo from 'react-icons/lib/io/social-github';
import Music from 'react-icons/lib/io/radio-waves';
import TwitterLogo from 'react-icons/lib/io/social-twitter';
import { TwitterWidgetContainer, GithubWidgetContainer, LastFmWidgetContainer } from '../../../containers';

const links = ({ email = ``, lastfm = { url: `` }, github = { url: `` }, twitter = { url: `` }, linkedin = { url: `` }, photoBlog = { url: `` } }) => [
  { title: `Get in Touch`, link: `mailto:${email}`, icon: <Mail />, emphasis: true },
  { title: `Github`, link: github.url, icon: <GitHubLogo />, widget: <GithubWidgetContainer /> },
  { title: `Twitter`, link: twitter.url, icon: <TwitterLogo />, widget: <TwitterWidgetContainer /> },
  { title: `LastFM`, link: lastfm.url, icon: <Music />, widget: <LastFmWidgetContainer /> },
  { title: `LinkedIn`, link: linkedin.url, icon: <LinkedInLogo /> },
  { title: `Photos`, link: photoBlog.url, icon: <Camera /> },
];

export default links;