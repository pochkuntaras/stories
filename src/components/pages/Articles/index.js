'use strict';

import React, { Component } from 'react';
import { map } from 'lodash';
import { observer } from 'mobx-react';
import store from 'store';
import SearchForm from './widgets/SearchFrom';

@observer
class Articles extends Component {
  render() {
    const { articles, loading } = store;
    return (
      !loading && <section>
        <SearchForm />
        <table border="1" style={{ width: '100%', minWidth: '600px', margin: '0 0 20px 0' }}>
          <caption>Articles</caption>
          <thead>
            <tr>
              <th>Story</th>
              <th>Name</th>
              <th>Text</th>
              <th>Kind</th>
              <th>Created at</th>
              <th>Updated at</th>
            </tr>
          </thead>
          <tbody>
            {
              map(articles, (article) => (
                <tr key={article.id}>
                  <td>{article.story.name}</td>
                  <td>{article.name}</td>
                  <td>{article.text}</td>
                  <td>{article.kind}</td>
                  <td>{article.createdAt}</td>
                  <td>{article.updatedAt}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    );
  }
}

export default Articles;
