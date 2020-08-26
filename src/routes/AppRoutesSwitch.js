import React from 'react';
import { Switch } from 'react-router-dom';
import { map } from 'lodash';
import IndexRoute from './IndexRoute';
import ArticlesRoute from './ArticlesRoute';
import EditArticlesRoute from './EditArticlesRoute';
import RoutesWithSubRoutes from './RoutesWithRubRoutes';

export const routes = [IndexRoute, ArticlesRoute, EditArticlesRoute];

const AppRoutesSwitch = () => (
  <Switch>
    {map(routes, (route, i) => (<RoutesWithSubRoutes key={i} {...route} />))}
  </Switch>
);

export default AppRoutesSwitch;
