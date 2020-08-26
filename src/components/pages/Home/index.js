import React from 'react';
import Link from 'components/shared/Link';
import { articlesPath } from 'helpers/routes';

export default () => (
  <section style={{
     textAlign: 'center',
     fontFamily: 'Arial, sans-serif'
    }}>
    <h1 style={{ fontSize: '26px' }}>
      Welcome to the stories application
    </h1>
    <p>
      <span>Go to </span>
      <Link to={articlesPath()}>articles</Link>
    </p>
  </section>
);
