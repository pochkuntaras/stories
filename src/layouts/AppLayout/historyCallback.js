import { routes } from 'routes/AppRoutesSwitch';
import { matchPath } from 'react-router';
import { parse } from 'qs';
import store from 'store';

export default (location) => {
  routes.some((route) => {
    const match = matchPath(location.pathname, route);
    const query = parse(location.search.substring(1));

    if (match && typeof route.prepareData === 'function') {
      route.prepareData(store, query);
    }
  });

  return true;
};
