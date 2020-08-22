import React from 'react';
import PropTypes from 'prop-types';

import { merge } from 'lodash';

import './stylesheets/component.sass';

const Button = ({ type, children, size, leftmost, rightmost, disabled }) => {
  const style = {};

  const fullStyle = {
    display: 'block',
    width: '100%',
    margin: '6px 0',
    textAlign: 'center'
  };

  const color = disabled ? 'gray' : 'blue';
  const className = `button button_${color}`;

  if (size === 'full') merge(style, fullStyle);

  return <button {...{ type, children, className, style, disabled }} />;
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  size: PropTypes.string,
  leftmost: PropTypes.bool,
  rightmost: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  children: 'New button',
  disabled: false
};

export default Button;
