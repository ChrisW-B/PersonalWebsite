// react/components/Interests/Interests.js
import React, { Component } from 'react';

export default class Interests extends Component {
  render = () =>
    (<div className='interests'>
      <h2>Interests</h2>
      <p>
        I&#39;ve made things with Python, Node.JS, and JavaScript, and most recently, I&#39;ve been working in frontend, especially in React. While at school, I studied a huge variety of subjects, ranging from bioinformatics and algorithms to pattern recognition and web design. Some of my other skills include
      </p>
      <div>
        <ul>
          <li>
            Programming
            <ul>
              <li>React, Node, JavaScript/JQuery, HTML, CSS, Java, C, C++, Python, MATLAB, and anything else I can get my hands on</li>
            </ul>
          </li>
          <li>
            Visuals
            <ul>
              <li>Adobe Photoshop, Bridge, Lightroom, and Illustrator for both graphic design and photo editing</li>
            </ul>
          </li>
          <li>
            Social
            <ul>
              <li>Wordpress, Tumblr, Twitter, Snapchat, Facebook, Slack</li>
            </ul>
          </li>
          <li>
            Platforms
            <ul>
              <li>OS X, Linux, Windows, Unix, Bash, Microsoft Office Suite, Windows Phone, command line</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>)
}