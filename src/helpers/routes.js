import { stringify } from 'qs';

const buildPath = (path, query) => {
  const queryStr = stringify(query, { arrayFormat: 'brackets' });

  return query ? `${path}?${queryStr}` : path
};

export const rootPath = () => '/';
export const articlesPath = (query) => buildPath('/articles', query);
export const editArticlesPath = (id = ':id') => `/articles/${id}/edit`;
