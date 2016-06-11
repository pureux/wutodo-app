'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleHomeClick(event) {
    const path = '/';
    this.context.router.push(path);
  }

  render() {
    return (
      <footer>
        <small>Wutodo</small>
        <RaisedButton label="Home" primary={true} onClick={this.handleHomeClick.bind(this)} />
      </footer>
    );
  }
}

Footer.contextTypes = {
  router: React.PropTypes.object
};

export default Footer;