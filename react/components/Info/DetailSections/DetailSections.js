import React, { Component } from 'react';
import { DetailSectionList } from './'

export default class DetailSections extends Component {
  render() {
    return (
      <ul className='detail-sections'>
        {
          DetailSectionList.map(({ title, content }) => (
            <li key={title} className='detail-section'>
              <h2 className='section_title'>{title}</h2>
              <div className='section_content'>{content}</div>
            </li>
          ))
        }
      </ul>
    )
  }
}