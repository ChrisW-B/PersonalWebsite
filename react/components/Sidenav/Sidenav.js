import React, { Component } from 'react';

export default class Sidenav extends Component {
  render = () =>
    <div className='sidenav'>
      <ul>
        <li>
          <h1>Chris Barry</h1>
        </li>
        <li>
          <a href="mailto:me@chriswbarry.com" title="Talk to me!">
            Talk to Me!
          </a>
        </li>
        <li>
          <a href="https://github.com/ChrisW-B/" title="Github">
            Github
          </a>
        </li>
        <li>
          <a href="https://keybase.io/chriswb" title="Keybase.io">
            Keybase
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ChrisW_B/" title="Twitter">
            Twitter
          </a>
          <div className='twitter-widget widget'>
            <div className='descrip'>
            </div>
            <div className='reltime'>
            </div>
          </div>
        </li>
        <li>
          <a href="http://last.fm/user/christo27/" title="Last.fm">
            Last.FM
          </a>
          <div className='lastfm-widget widget'>
            <div className='descrip'>
            </div>
          </div>
        </li>
        <li>
          <a href="http://photo.chriswbarry.com/" title="Photography">Photography</a>
        </li>
        <div className='pad'></div>
      </ul>
      <div className='tumblr-widget widget descrip photo-descrip'>
      </div>
    </div>

}