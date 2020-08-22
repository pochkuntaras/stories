
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Form from 'components/shared/Form';
import browserHistory from 'helpers/history';
import { articlesPath } from 'helpers/routes';
import TextField from 'components/shared/TextField';
import store from 'store';

@observer
class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const { name, value } = event.target;
    const form = 'articles';

    store.setValues({ form, name, value });
  }

  handleSubmit(e) {
    e.preventDefault();
    browserHistory.push(articlesPath(store.formData.articles));
  }

  render() {
    const { articles } = store.formData;
    const { story, named, kind, text } = articles;

    return (
      <Form onSubmit={this.handleSubmit} >
        <TextField name="story" value={story} onChange={this.handleChange} />
        <TextField name="named" placeholder="Name" value={named} onChange={this.handleChange} />
        <TextField name="kind" value={kind} onChange={this.handleChange} />
        <TextField name="text" value={text} onChange={this.handleChange} />
        <input type="submit" className="button button_blue" value="Update" />
      </Form>
    );
  }
};

export default SearchForm;