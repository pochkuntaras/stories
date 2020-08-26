import React from 'react';
import { editArticlesPath } from 'helpers/routes';
import EditArticles from 'components/pages/Articles/Edit';

export default {
  name: 'EditArticles',
  exact: true,
  strict: true,
  path: editArticlesPath(),
  render: () => <EditArticles />,
  prepareData: (store, match, query) => store.fetchArticle(match.params.id)
};
