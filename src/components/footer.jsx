'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <small>Wutodo</small>
        <RaisedButton label="Home" primary={true} />
      </footer>
    );
  }
}