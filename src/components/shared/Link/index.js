import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { assign } from 'lodash';

import './stylesheets/component.sass';

const AppLink = (props) => {
  let initClassName = 'link';

  const { color } = props;
  const { to, title, className, style, children, onClick } = props;

  if (color) initClassName = `${initClassName} link_${color}`;

  return <Link {
  ...assign({},
    { className: className || initClassName },
    { to, title, style, children, onClick }
  )
  }
  />;
};

AppLink.defaultProps = {
  children: 'New link',
  color: 'blue'
};

AppLink.propTypes = assign(
  {},
  {
    color: PropTypes.oneOf(['blue', 'red', 'gray'])
  },
  Link.propTypes
);

export default AppLink;
