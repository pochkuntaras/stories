import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/component.sass';

const Row = ({ children }) => (
  <div className="row">
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.any
};

export default Row;
