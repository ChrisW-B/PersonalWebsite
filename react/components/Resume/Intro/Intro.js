// react/components/Intro/Intro.js

import React, { Component } from 'react';

export default class Intro extends Component {
  render = () =>
    <div className='intro'>
      <h1>Hi, I'm Chris</h1>
      <p>
        I'm a JavaScript and Node developer. Most recently, I worked at <a href='https://kipthis.com'>Kip</a>, where I first worked on the Slack bot, and then moved to work on creating an entirely new Web app with React, Redux, and Webpack.
      </p>
    </div>

}