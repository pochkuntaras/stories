'use strict';

import React, { Component } from 'react';
import { map } from 'lodash';
import { observer } from 'mobx-react';
import store from 'store';

import Table from 'components/shared/Table';
import TableHead from 'components/shared/Table/Head';
import TableBody from 'components/shared/Table/Body';
import TableRow from 'components/shared/Table/Row';
import Link from 'components/shared/Link';

import SearchForm from './widgets/SearchFrom';
import Sortable from 'components/shared/Sortable';
import { articlesPath, editArticlesPath } from 'helpers/routes';

import { dateFormat } from 'helpers';

@observer
class Articles extends Component {
  render() {
    const { articles, loading } = store;

    return (
      <section>
        <SearchForm />
        <Table>
          <TableHead>
            <TableRow>
              <th style={{ width: '15%' }}>
                <Sortable name='articles' resourcePath={articlesPath} sort="story">
                  Story
                </Sortable>
              </th>
              <th style={{ width: '15%' }}>
                <Sortable name='articles' resourcePath={articlesPath} sort="named">
                  Name
              </Sortable>
              </th>
              <th style={{ width: '10%' }}>
                <Sortable name='articles' resourcePath={articlesPath} sort="kind">
                  Kind
                </Sortable>
              </th>
              <th style={{ width: '30%' }}>Text</th>
              <th style={{ width: '10%' }}>
                <Sortable name='articles' resourcePath={articlesPath} sort="created_at">
                  Created at
                </Sortable>
              </th>
              <th style={{ width: '10%' }}>
                <Sortable name='articles' resourcePath={articlesPath} sort="updated_at">
                  Updated at
                </Sortable>
              </th>
              <th></th>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              !loading && map(articles, (article) => (
                <TableRow key={article.id}>
                  <td>{article.story.name}</td>
                  <td>{article.name}</td>
                  <td>{article.kind}</td>
                  <td>{article.text}</td>
                  <td>{dateFormat(article.createdAt, 'DD MMM HH:mm')}</td>
                  <td>{dateFormat(article.updatedAt, 'DD MMM HH:mm')}</td>
                  <td>
                    <Link to={editArticlesPath(article.id)} title={`Edit article ${article.id}`}>Edit</Link>
                  </td>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </section>
    );
  }
}

export default Articles;
