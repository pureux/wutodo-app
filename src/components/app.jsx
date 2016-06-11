'use strict';

import React from 'react';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header.jsx';
import Footer from './footer.jsx';
import NavLink from './nav-link.jsx';

const darkMuiTheme = getMuiTheme(darkBaseTheme);

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={darkMuiTheme}>
        <div id="app">
          <Header key="header" />
          <main>
            {this.props.children}
          </main>
          <Footer key="footer" />
        </div>
      </MuiThemeProvider>
    );
  }
}