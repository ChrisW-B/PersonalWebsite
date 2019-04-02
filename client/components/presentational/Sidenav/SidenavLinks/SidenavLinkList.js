import React from 'react';
import { IoIosRadio, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoMdCamera, IoMdMail } from 'react-icons/io';

import { GithubWidgetContainer, LastFmWidgetContainer, TwitterWidgetContainer } from '../../../containers';

const links = ({
  email = ``,
  lastfm = { url: `` },
  github = { url: `` },
  twitter = { url: `` },
  linkedin = { url: `` },
  photoBlog = { url: `` }
}) => [
  {
    title: `Get in Touch`,
    link: `mailto:${email}`,
    icon: <IoMdMail />,
    emphasis: true
  },
  {
    title: `Github`,
    link: github.url,
    icon: <IoLogoGithub />,
    widget: <GithubWidgetContainer />
  },
  {
    title: `Twitter`,
    link: twitter.url,
    icon: <IoLogoTwitter />,
    widget: <TwitterWidgetContainer />
  },
  {
    title: `LastFM`,
    link: lastfm.url,
    icon: <IoIosRadio />,
    widget: <LastFmWidgetContainer />
  },
  { title: `LinkedIn`, link: linkedin.url, icon: <IoLogoLinkedin /> },
  { title: `Photos`, link: photoBlog.url, icon: <IoMdCamera /> }
];

export default links;
