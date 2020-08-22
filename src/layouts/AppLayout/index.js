import React from 'react';
import PropTypes from 'prop-types';
import { rootPath, articlesPath } from 'helpers/routes';
import { Router } from 'react-router';
import Link from 'components/shared/Link';
import browserHistory from 'helpers/history';
import historyCallback from './historyCallback';
import AppRoutesSwitch from 'routes/AppRoutesSwitch';

import './stylesheets/component.sass';

browserHistory.listen(historyCallback);

historyCallback(window.location);

const AppLayout = ({ children }) => (
  <Router history={browserHistory}>
    <main style={{margin: '10px'}}>
      <nav>
        <Link to={rootPath()}>Home</Link>
        &nbsp;|&nbsp;
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
