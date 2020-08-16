import React from 'react';
import { Route } from 'react-router-dom';

const RoutesWithSubRoutes = (route) => (
  <Route {...route}/>
);

export default RoutesWithSubRoutes;
