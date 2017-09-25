// react/components/Intro/Intro.js

import React, { Component } from 'react';

export default class Intro extends Component {
  render = () =>
    (
      <div className='intro'>
        <h1>Hi!</h1>
        <p>
          <strong>I&#39;m a web developer from NYC, focusing on Node, Javascript and React. I love learning the newest technologies to create great web experiences.</strong> Most recently, I worked at <strong>Kip</strong>, where I worked on a Slack bot and later worked in a team creating an entirely new frontend in React.
        </p>
      </div>
    )
}