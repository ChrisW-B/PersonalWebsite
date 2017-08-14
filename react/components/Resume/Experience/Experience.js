// react/components/Experience/Experience.js

import React, { Component } from 'react';

export default class Experience extends Component {
  render = () =>
    <div>
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
    </div>

}