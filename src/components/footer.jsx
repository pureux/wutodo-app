'use strict';

import React from 'react';
import { Link } from 'react-router';

import Home from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <small>Wutodo</small>
        <RaisedButton
          containerElement={<Link to="/" />}
          icon={<Home />}
          primary={true}
        />
      </footer>
    );
  }
}

Footer.contextTypes = {
  router: React.PropTypes.object
};

export default Footer;