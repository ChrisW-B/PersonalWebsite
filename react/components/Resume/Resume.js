import React, { Component } from 'react';

export default class Resume extends Component {
  render = () =>
    <div className='right-side'>
      <div className='inner-right'>
        <div className="prof-pic">
          <img src="/images/prof.jpg" alt="Profile Picture"/>
        </div>
        <div className='about-me'>
          <h1>Hi, I'm Chris</h1>
          <p>
            I'm a JavaScript and Node developer. Most recently, I worked at <a href="https://kipthis.com">Kip</a>, where I first worked on the Slack bot, and then moved to work on creating an entirely new Web app with React, Redux, and Webpack.
          </p>
          <h2>Interests</h2>
          <p>
            I've made things with Python, Node.JS, and JavaScript, and most recently, I've been working in frontend, especially in React. While at school, I studied a huge variety of subjects, ranging from bioinformatics and algorithms to pattern recognition and web design. Some of my other skills include
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
          <h2>Some Personal Projects</h2>
          <ul>
            <li><a href="http://spotifyapps.chriswbarry.com/" title="Spotify Autoplaylists">Spotify Autoplaylists</a> (<a href="https://github.com/ChrisW-B/spotifyPlaylists" title="Spotify Autoplaylists">source</a>)</li>
            <ul>
              <li>A website that will create and update playlists for your most played and recently added music</li>
            </ul>
            <li><a href="https://twitter.com/MagicGifsBot/" title="Magic Gifs Bot">@MagicGifsBot</a> (<a href="https://github.com/ChrisW-B/MagicGifs" title="Magic Gifs Bot">source</a>)</li>
            <ul>
              <li>A little twitter bot that might respond with a gif!</li>
            </ul>
            <li><a href="https://news.chriswbarry.com/" title="Positive News">Positive News</a> (<a href="https://github.com/ChrisW-B/positive-news" title="Positive News">source</a>)</li>
            <ul>
              <li>An experiment in identifying positivity/sentiment in news</li>
            </ul>
          </ul>
          <h2>Experience</h2>
          <ul>
            <li>
              Kip: <strong>Frontend Developer</strong>, <i>November 2016-August 2017</i>
              <ul>
                <li>Worked in a small team to create a team commerce focused bot</li>
                <li>Created a new React Webapp from the ground up, including interacting with an API with Redux and Styling with SASS/SCSS</li>
              </ul>
            </li>
            <li>
              The Brown and White: <strong>Sports Visuals Editor</strong>, <i>August 2015-June 2016</i>
              <ul>
                <li>Worked in a team to produce a student run print newspaper twice weekly, and daily web articles</li>
                <li>Coordinated a team of photographers to cover events</li>
                <li>Processed Photos for print and web</li>
                <li>Aided work on website, including setting up A/B testing with Parsely</li>
              </ul>
            </li>
            <li>
              Chubb Insurance: <strong>Digital Business Intern</strong>, <i>Summers 2014 and 15</i>
              <ul>
                <li>Worked with the Digital Business team to create internal HTML and JavaScript apps for testing and searching</li>
                <li>Created complex modular JavaScript grids including session storage, searching, and sorting</li>
                <li>Worked in Claims IT to upgrade applications from VB6 to VB.Net, as well as Task Tray apps to aid in switching servers, parsing SQL</li>
              </ul>
            </li>
            <li>
              Lehigh University: <strong>Lab Assistant/Grader</strong>, <i>August 2014-December 2015</i>
              <ul>
                <li>Graded labs, homework, and exams for Lehigh Computer Science Courses</li>
                <li>Held weekly office hours to assist students with homework and classNamees</li>
                <li>Assisted Professor with Labs for beginner CS students, in Java, HTML, and JavaScript</li>
              </ul>
            </li>
          </ul>
          <h3> Want to know more?</h3>
          <p>
            <a className='button' href="/files/ChrisBarry_Resume.pdf" title="">Download my Resume</a> or <a className='button' href="mailto:me@chriswbarry.com">Email Me!</a>
          </p>
        </div>
      </div>
    </div>
}