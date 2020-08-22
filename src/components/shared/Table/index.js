import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/component.sass';

const Table = ({ children }) => (
  <table className="table">
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node.isRequired
};

export default Table;
