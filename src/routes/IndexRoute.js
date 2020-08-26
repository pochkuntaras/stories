import React from 'react';
import { rootPath } from 'helpers/routes';
import HomePage from 'components/pages/Home';

export default {
  name: 'Index',
  exact: true,
  strict: true,
  path: rootPath(),
  render: () => <HomePage />
};
