import React from 'react';
import PropTypes from 'prop-types';

import './stylesheets/component.sass';

const Form = ({ heading, onSubmit, children, style }) => (
  <form className='form' {...{ onSubmit, children, style }}>
    {heading && <h2 className="form__heading">{heading}</h2>}
    {children}
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Form;
