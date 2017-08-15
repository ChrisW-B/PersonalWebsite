import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TwitterWidget extends Component {
  static propTypes = {
    link: PropTypes.string,
    title: PropTypes.string
  }
  render = () => {
    const { link, title } = this.props;
    return <li><a href={link} title={title}>{title}</a></li>;
  }
}