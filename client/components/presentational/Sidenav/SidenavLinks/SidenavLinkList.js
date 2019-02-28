import React from 'react';
import {
  IoMdMail, IoLogoLinkedin, IoMdCamera, IoLogoGithub, IoIosRadio, IoLogoTwitter,
} from 'react-icons/io';
import { TwitterWidgetContainer, GithubWidgetContainer, LastFmWidgetContainer } from '../../../containers';

const links = ({
  email = ``, lastfm = { url: `` }, github = { url: `` }, twitter = { url: `` }, linkedin = { url: `` }, photoBlog = { url: `` },
}) => [
  {
    title: `Get in Touch`, link: `mailto:${email}`, icon: <IoMdMail />, emphasis: true,
  },
  {
    title: `Github`, link: github.url, icon: <IoLogoGithub />, widget: <GithubWidgetContainer />,
  },
  {
    title: `Twitter`, link: twitter.url, icon: <IoLogoTwitter />, widget: <TwitterWidgetContainer />,
  },
  {
    title: `LastFM`, link: lastfm.url, icon: <IoIosRadio />, widget: <LastFmWidgetContainer />,
  },
  { title: `LinkedIn`, link: linkedin.url, icon: <IoLogoLinkedin /> },
  { title: `Photos`, link: photoBlog.url, icon: <IoMdCamera /> },
];

export default links;