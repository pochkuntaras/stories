import React from 'react';
import { articlesPath } from 'helpers/routes';
import Articles from 'components/pages/Articles/Index';

export default {
  name: 'Articles',
  exact: true,
  strict: true,
  path: articlesPath(),
  render: () => <Articles/>,
  prepareData: (store, match, query) => store.fetchArticles(query)
};
