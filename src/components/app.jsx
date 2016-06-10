'use strict';

import React from 'react';

import Header from './header.jsx';
import Footer from './footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <article>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>
        <Footer />
      </div>
    );
  }
}