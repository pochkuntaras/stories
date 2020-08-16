import React from 'react';
import PropTypes from 'prop-types';
import { rootPath, articlesPath } from 'helpers/routes';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';
import browserHistory from 'helpers/history';
import historyCallback from './historyCallback';
import AppRoutesSwitch from 'routes/AppRoutesSwitch';

browserHistory.listen(historyCallback);

historyCallback(window.location);

const AppLayout = ({ children }) => (
  <Router history={browserHistory}>
    <main>
      <nav>
        <Link to={rootPath()}>Home</Link>
        |
        <Link to={articlesPath()}>Articles</Link>
      </nav>
      <AppRoutesSwitch />
    </main>
  </Router>
);

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
