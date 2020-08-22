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

@observer
class Articles extends Component {
  render() {
    const { articles, loading } = store;
    return (
      !loading && <section>
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
              <th>
                <Sortable name='articles' resourcePath={articlesPath} sort="kind">
                  Kind
                </Sortable>
              </th>
              <th>Created at</th>
              <th>Updated at</th>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              map(articles, (article) => (
                <TableRow key={article.id}>
                  <td>{article.story.name}</td>
                  <td>{article.name}</td>
                  <td>{article.text}</td>
                  <td>{article.kind}</td>
                  <td>{article.createdAt}</td>
                  <td>{article.updatedAt}</td>
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
