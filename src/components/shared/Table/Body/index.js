import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ children }) => (
  <tbody className="table__body">
    {children}
  </tbody>
);

Body.propTypes = {
  children: PropTypes.node.isRequired
};

export default Body;
