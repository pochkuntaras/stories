import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/component.sass';

const Head = ({ children }) => (
  <thead className="table__head">
    {children}
  </thead>
);

Head.propTypes = {
  children: PropTypes.node.isRequired
};

export default Head;
