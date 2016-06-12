'use strict';

import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header.jsx';
import Footer from './footer.jsx';

import { amber500, blueGrey100, blueGrey500, blueGrey700, grey400, grey600, grey900, white } from 'material-ui/styles/colors';
// import { fade } from 'material-ui/utils/colorManipulator';

const customPalette = {
  accentColor: amber500,
  darkPrimaryColor: blueGrey700,
  dividerColor: grey400,
  lightPrimaryColor: blueGrey100,
  primaryColor: blueGrey500,
  primaryText: grey900,
  secondaryText: grey600,
  textColor: white,
  iconColor: white
}

// const lightBaseTheme = {
//   spacing: {
//     iconSize: 24,
//     desktopGutter: 24,
//     desktopGutterMore: 32,
//     desktopGutterLess: 16,
//     desktopGutterMini: 8,
//     desktopKeylineIncrement: 64,
//     desktopDropDownMenuItemHeight: 32,
//     desktopDropDownMenuFontSize: 15,
//     desktopDrawerMenuItemHeight: 48,
//     desktopSubheaderHeight: 48,
//     desktopToolbarHeight: 56,
//   },
//   palette: {
//     primary1Color: cyan500,
//     primary2Color: cyan700,
//     primary3Color: grey400,
//     accent1Color: pinkA200,
//     accent2Color: grey100,
//     accent3Color: grey500,
//     textColor: darkBlack,
//     alternateTextColor: white,
//     canvasColor: white,
//     borderColor: grey300,
//     disabledColor: fade(darkBlack, 0.3),
//     pickerHeaderColor: cyan500,
//     clockCircleColor: fade(darkBlack, 0.07),
//     shadowColor: fullBlack,
//   },
// };

const customMuiTheme = getMuiTheme({
  fontFamily: 'Open Sans, Arial, Helvetica, sans-serif',
  palette: {
    primary1Color: customPalette.primaryColor,
    primary2Color: customPalette.darkPrimaryColor,
    primary3Color: customPalette.lightPrimaryColor,
    accent1Color: customPalette.accentColor,
    textColor: customPalette.textColor
  },
  appBar: {
    color: customPalette.darkPrimaryColor,
    textColor: customPalette.accentColor
  },
  avatar: {
    backgroundColor: customPalette.darkPrimaryColor,
    color: customPalette.lightPrimaryColor
  },
  checkbox: {
    checkedColor: customPalette.accentColor
  },
  drawer: {
    color: customPalette.darkPrimaryColor,
    theme: {
      color: customPalette.darkPrimaryColor
    }
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={customMuiTheme}>
        <div id="app">
          <main>
            {this.props.children}
          </main>
          <Footer key="footer" {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default App;