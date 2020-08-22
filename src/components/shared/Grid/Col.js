import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/component.sass';

const Col = ({ children, size, style }) => {
  let className = 'row__col';

  if (size) className = `${className} row__col_${size}`;

  return <div {...{ className, style }}>{children}</div>;
};

Col.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
  style: PropTypes.object
};

export default Col;
