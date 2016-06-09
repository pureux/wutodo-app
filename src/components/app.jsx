'use strict';

import React from 'react';

import Header from './header.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    );
  }
}