'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import store from 'store';

import './stylesheets/component.sass';

@observer
class Sortable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title, name, sort, resourcePath } = this.props;
    const { direction } = store.formData[name];
    const nextDirection = direction === 'asc' ? 'desc' : 'asc';
    const query = { ...store.formData[name], sort, direction: nextDirection };
    const to = resourcePath(query);

    let className = 'sortable';

    if (sort === store.formData[name].sort) {
      className = `${className} ${className}_${direction}`;
    }

    return (
      <Link {...{ to, title, children, className }} />
    );
  }
}

Sortable.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  resourcePath: PropTypes.func.isRequired
};

Sortable.defaultProps = {
  children: 'New link'
};

export default Sortable;
