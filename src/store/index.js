import request from 'superagent';
import humps from 'humps';

import { observable, action, runInAction } from 'mobx';

class Store {
  baseUrl = `${process.env.PROTOCOL}://${process.env.DOMAIN}`

  @observable loading = true;
  @observable articles = [];

  @action.bound
  async fetchArticles() {
    const articlesUrl = `${this.baseUrl}/articles`

    this.loading = true;

    const { body } = await request.get(articlesUrl).set('accept', 'json')
    const { articles } = humps.camelizeKeys(body);

    runInAction(() => {
      this.articles = articles;
      this.loading = false;
    });
  };
}

export default new Store();
