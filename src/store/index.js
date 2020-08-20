import request from 'superagent';
import { decamelizeKeys, camelizeKeys } from 'humps';
import { stringify } from 'qs';
import { pickBy, identity } from 'lodash';
import { observable, action, runInAction } from 'mobx';

class Store {
  baseUrl = `${process.env.PROTOCOL}://${process.env.DOMAIN}`

  @observable loading = true;
  @observable articles = [];
  @observable formData = {
    articleSearch: {}
  };

  @action.bound
  async fetchArticles(query) {
    const articlesUrl = `${this.baseUrl}/articles`

    this.loading = true;

    let r = request.get(articlesUrl);

    if (query) {
      r.query(stringify(decamelizeKeys(query), { arrayFormat: 'brackets' }));
    }

    const { body } = await r.set('accept', 'json')
    const { articles } = camelizeKeys(body);

    runInAction(() => {
      this.articles = articles;
      this.loading = false;
      this.formData.articleSearch = camelizeKeys(query)
    });
  };

  @action
  setValues({ form, name, value }) {
    runInAction(() => {
      this.formData[form][name] = value;
      this.formData[form] = pickBy(this.formData[form], identity);
    });
  };
}

export default new Store();
