'use strict';

import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Form from 'components/shared/Form';
import Row from 'components/shared/Grid/Row';
import Col from 'components/shared/Grid/Col';
import TextField from 'components/shared/TextField';
import Button from 'components/shared/Button';
import Link from 'components/shared/Link';

import { articlesPath } from 'helpers/routes';

import store from 'store';

@observer
class EditArticles extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const { name, value } = event.target;
    const form = 'editArticle';

    store.setValues({ form, name, value });
  }

  handleSubmit(e) {
    e.preventDefault();
    store.updateArticle();
  }

  render() {
    const { editArticle } = store.formData;
    const { name, kind, text } = editArticle;

    return (
      <Form heading="Edit article" onSubmit={this.handleSubmit} >
        <Row>
          <Col size='3-10'>
            <TextField name="name" value={name} onChange={this.handleChange} />
          </Col>
          <Col size='3-10'>
            <TextField name="kind" value={kind} onChange={this.handleChange} />
          </Col>
          <Col size='3-10'>
            <TextField name="text" value={text} onChange={this.handleChange} />
          </Col>
          <Col size='1-10'>
            <Button type='submit' size='full'>Save</Button>
          </Col>
        </Row>
        <Link to={articlesPath()}>Back</Link>
      </Form>
    );
  }
}

export default EditArticles;
