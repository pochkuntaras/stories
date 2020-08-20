import React from 'react';
import { articlesPath } from 'helpers/routes';
import Articles from 'components/pages/Articles';

export default {
  name: 'Articles',
  exact: true,
  strict: true,
  path: articlesPath(),
  render: () => <Articles/>,
  prepareData: (store, query) => store.fetchArticles(query)
};
