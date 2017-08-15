// react/components/Projects/Projects.js

import React, { Component } from 'react';

export default class Projects extends Component {
  render = () =>
    <div className='projects'>
      <h2>Some Personal Projects</h2>
      <ul>
        <li><a href='//spotifyapps.chriswbarry.com/' title='Spotify Autoplaylists'>Spotify Autoplaylists</a> (<a href='//github.com/ChrisW-B/spotifyPlaylists' title='Spotify Autoplaylists'>source</a>)</li>
        <ul>
          <li>A website that will create and update playlists for your most played and recently added music</li>
        </ul>
        <li><a href='//twitter.com/MagicGifsBot/' title='Magic Gifs Bot'>@MagicGifsBot</a> (<a href='//github.com/ChrisW-B/MagicGifs' title='Magic Gifs Bot'>source</a>)</li>
        <ul>
          <li>A little twitter bot that might respond with a gif!</li>
        </ul>
        <li><a href='//news.chriswbarry.com/' title='Positive News'>Positive News</a> (<a href='//github.com/ChrisW-B/positive-news' title='Positive News'>source</a>)</li>
        <ul>
          <li>An experiment in identifying positivity/sentiment in news</li>
        </ul>
      </ul>
    </div>

}