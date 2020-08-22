import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/component.sass';

const Row = ({ children }) => (
  <tr className="table__row">
    {children}
  </tr>
);

Row.propTypes = {
  children: PropTypes.node.isRequired
};

export default Row;
