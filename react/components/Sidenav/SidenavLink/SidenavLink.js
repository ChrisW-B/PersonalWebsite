import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SidenavLink extends Component {
  static propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    widget: PropTypes.node
  }

  static defaultProps = {
    link: '',
    title: '',
    widget: null
  }
  render = () => {
    const { link, title, widget } = this.props;
    if (widget) return widget;
    return <li><a href={link} title={title}>{title}</a></li>;
  }
}