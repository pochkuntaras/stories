import React from 'react';
import { rootPath } from 'helpers/routes';

export default {
  name: 'Index',
  exact: true,
  strict: true,
  path: rootPath(),
  render: () => <h2>Main page</h2>
};
