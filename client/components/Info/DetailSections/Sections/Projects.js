// react/components/Projects/Projects.js

import React from 'react';
import { Link, SectionContentUL } from './Sections.style';

const Projects = () => (
  <SectionContentUL>
    <li><Link href='//spotifyapps.chriswbarry.com/' title='Spotify Autoplaylists'>Spotify Autoplaylists</Link> (<Link href='//github.com/ChrisW-B/spotifyPlaylists' title='Spotify Autoplaylists'>source</Link>)</li>
    <ul>
      <li>A website that will create and update playlists for your most played and recently added music</li>
    </ul>
    <li><Link href='//twitter.com/MagicGifsBot/' title='Magic Gifs Bot'>@MagicGifsBot</Link> (<Link href='//github.com/ChrisW-B/MagicGifs' title='Magic Gifs Bot'>source</Link>)</li>
    <ul>
      <li>A little twitter bot that might respond with a gif!</li>
    </ul>
    <li><Link href='//news.chriswbarry.com/' title='Positive News'>Positive News</Link> (<Link href='//github.com/ChrisW-B/positive-news' title='Positive News'>source</Link>)</li>
    <ul>
      <li>An experiment in identifying positivity/sentiment in news</li>
    </ul>
  </SectionContentUL>
);
export default Projects;