import request from 'superagent';

import { decamelizeKeys, camelizeKeys } from 'humps';
import { stringify } from 'qs';
import { pickBy, identity, findIndex } from 'lodash';
import { observable, action, runInAction, autorun } from 'mobx';
import browserHistory from 'helpers/history';
import { articlesPath } from 'helpers/routes';

import consumer from 'channels/consumer.js'

class Store {
  baseUrl = `${process.env.PROTOCOL}://${process.env.DOMAIN}`

  @observable loading = true;
  @observable articles = [];
  @observable formData = {
    articles: {
      sort: 'id',
      direction: 'asc'
    },
    editArticle: {}
  };

  dispose = autorun(
    () => {
      consumer.subscriptions.create({
        channel: "ArticlesChannel"
      }, {
        connected() {
          this.perform('articles');
        },
        received: (data) => {
          const { article } = camelizeKeys(data);
          const { id } = article;
          const index = findIndex(this.articles, { id });

          runInAction(() => {
            this.articles[index] = article;
          });
        }
      });
    }
  );

  @action
  apiCall(path, method, query = {}) {
    return new Promise((resolve, reject) => {
      let r = request[method.toLowerCase()](`${this.baseUrl}${path}`);

      if (query) {
        r.query(stringify(decamelizeKeys(query), { arrayFormat: 'brackets' }));
      }

      r.set('accept', 'json').end((error, data) => (
        error ? reject(error) : resolve(data.body)
      ));
    });
  }

  @action.bound
  async fetchArticles(query) {
    this.loading = true;

    this.apiCall('/articles', 'get', query).then(
      (response) => {
        const { articles } = camelizeKeys(response);

        runInAction(() => {
          this.articles = articles;
          this.loading = false;
          this.formData.articles = camelizeKeys(query);
        })
      },
      (error) => {
        console.error(error);
      }
    );
  };

  @action.bound
  async fetchArticle(id) {
    this.apiCall(`/articles/${id}`, 'get').then(
      (response) => {
        const { article } = camelizeKeys(response);

        runInAction(() => {
          this.formData.editArticle = article;
        })
      },
      (error) => {
        console.error(error);
      }
    );
  }

  @action.bound
  async updateArticle() {
    const { id } = this.formData.editArticle;
    const { name, kind, text } = this.formData.editArticle;
    const query = { article: decamelizeKeys({ name, kind, text }) };

    this.apiCall(`/articles/${id}`, 'patch', query).then(
      (response) => {
        browserHistory.push(articlesPath());
      },
      (error) => {
        console.error(error);
      }
    );
  }

  @action
  setValues({ form, name, value }) {
    runInAction(() => {
      this.formData[form][name] = value;
      this.formData[form] = pickBy(this.formData[form], identity);
    });
  };
}

export default new Store();
