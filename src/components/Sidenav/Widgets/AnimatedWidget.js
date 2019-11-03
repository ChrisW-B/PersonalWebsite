import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Widget, WidgetWrapper } from '@styles/Widgets';

const AnimatedWidget = ({ items, children }) => {
  return (
    <TransitionGroup component={WidgetWrapper}>
      {items &&
        items.map(data => (
          <CSSTransition key={Object.entries(data)} timeout={1000}>
            <Widget>{children(data)}</Widget>
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

AnimatedWidget.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.func), PropTypes.func]).isRequired,
};

export default AnimatedWidget;
