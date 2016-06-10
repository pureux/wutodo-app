'use strict';

import React from 'react';

import Header from './header.jsx';
import Footer from './footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header key="header" />
        <main>
          <p>Lorem ipsum dolor sit amet.</p>
        </main>
        <Footer key="footer" />
      </div>
    );
  }
}