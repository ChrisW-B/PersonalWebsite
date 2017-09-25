import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SidenavLink extends Component {
  static propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    widget: PropTypes.node,
    icon: PropTypes.node,
    emphasis: PropTypes.bool
  }

  static defaultProps = {
    link: '',
    title: '',
    widget: null,
    icon: null,
    emphasis: false
  }
  render = () => {
    const { link, title, widget, icon, emphasis } = this.props;
    return widget ? widget
      : <li className={`${emphasis ? 'emphasis':''}`}>
        <a href={link} title={title}><span className='icon'>{icon}</span>{title}</a>
      </li>;
  }
}