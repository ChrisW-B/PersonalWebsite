import React, { Component } from 'react';

export default class Technologies extends Component {
  skills = [{
      name: 'Programming',
      types: ['React', 'Node', 'JavaScript', 'GraphQL', 'HTML', 'CSS', 'JQuery', 'Java', 'C', 'C++', 'C#', 'Python']
    },
    {
      name: 'Visuals',
      types: ['Adobe Photoshop', 'Bridge', 'Lightroom', 'Illustrator']
    },
    {
      name: 'Social',
      types: ['Wordpress', 'Tumblr', 'Twitter', 'Facebook', 'Slack', ]
    },
    {
      name: 'Platforms',
      types: ['OS X', 'Linux', 'Windows', 'Unix', 'Bash/Fish Shell', 'Microsoft Office', 'Windows Phone']
    }
  ]
  render() {
    return (
      <div className='tech'>
        {
          this.skills.map(({name, types})=>(
            <div key={name} className='skill-type'>
              <h4>{name}</h4>
              <ul>
                {
                  types.map(type=>(
                    <li key={type}>{type}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    );
  }
}