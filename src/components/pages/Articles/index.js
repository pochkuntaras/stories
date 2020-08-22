'use strict';

import React, { Component } from 'react';
import { map } from 'lodash';
import { observer } from 'mobx-react';
import store from 'store';

import Table from 'components/shared/Table';
import TableHead from 'components/shared/Table/Head';
import TableBody from 'components/shared/Table/Body';
import TableRow from 'components/shared/Table/Row';

import SearchForm from './widgets/SearchFrom';
import Sortable from 'components/shared/Sortable';
import { articlesPath } from 'helpers/routes';

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
              <th>
                <Sortable name='articles' resourcePath={articlesPath} sort="story">
                  Story
                </Sortable>
              </th>
              <th>
                <Sortable name='articles' resourcePath={articlesPath} sort="named">
                  Name
              </Sortable>
              </th>
              <th>Text</th>
              <th style={{ width: '140px' }}>
                <Sortable name='articles' resourcePath={articlesPath} sort="kind">
                  Kind
                </Sortable>
              </th>
              <th style={{ width: '120px' }}>Created at</th>
              <th style={{ width: '120px' }}>Updated at</th>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              !loading && map(articles, (article) => (
                <TableRow key={article.id}>
                  <td>{article.story.name}</td>
                  <td>{article.name}</td>
                  <td>{article.text}</td>
                  <td>{article.kind}</td>
                  <td>{dateFormat(article.createdAt, 'DD MMM HH:mm').toUpperCase()}</td>
                  <td>{dateFormat(article.updatedAt, 'DD MMM HH:mm').toUpperCase()}</td>
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
