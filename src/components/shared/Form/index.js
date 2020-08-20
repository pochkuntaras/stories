import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, children, style }) => (
  <form className='form' {...{ onSubmit, children, style }} />
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Form;
