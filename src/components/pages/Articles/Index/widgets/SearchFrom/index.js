
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import browserHistory from 'helpers/history';
import { articlesPath } from 'helpers/routes';

import Form from 'components/shared/Form';
import Row from 'components/shared/Grid/Row';
import Col from 'components/shared/Grid/Col';
import TextField from 'components/shared/TextField';
import Button from 'components/shared/Button';

import { map } from 'lodash';
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
    const { story, named, kind, text, groupByField } = articles;

    return (
      <Form heading="Search articles" onSubmit={this.handleSubmit} >
        <Row>
          <Col size='4-10'>
            <TextField name="story" value={story} onChange={this.handleChange} />
          </Col>
          <Col size='3-10'>
            <TextField name="named" placeholder="Name" value={named} onChange={this.handleChange} />
          </Col>
          <Col size='3-10'>
            <TextField name="kind" value={kind} onChange={this.handleChange} />
          </Col>
        </Row>
        <Row>
          <Col size='4-10'>
            <TextField name="text" value={text} onChange={this.handleChange} />
          </Col>
          <Col size='3-10'>
            <select className="input" name="groupByField" value={groupByField} onChange={this.handleChange}>
              <option value="">Group by field</option>
              {
                map([
                  { value: 'story_id', name: 'Story' },
                  { value: 'name', name: 'Name' },
                  { value: 'kind', name: 'Kind' },
                  { value: 'updated_at', name: 'Updated at' }
                ], (field) => (
                  <option key={field.value} value={field.value}>{field.name}</option>
                ))
              }
            </select>
          </Col>
          <Col size='3-10'>
            <Button type='submit' size='full'>Search</Button>
          </Col>
        </Row>
      </Form>
    );
  }
};

export default SearchForm;
