'use strict';

import React from 'react';
import { Link } from 'react-router';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Home from 'material-ui/svg-icons/action/home';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pathname } = this.props.location;
    const buttonStyle = { display: (pathname === '/' ? 'none' : 'block') };
    return (
      <footer>
        <small>Wutodo</small>
        <FloatingActionButton
          className="floatingActionButton"
          containerElement={<Link to="/" />}
          linkButton={true}
          mini={false}
          secondary={true}
          style={buttonStyle}
        >
          <Home />
        </FloatingActionButton>
      </footer>
    );
  }
}

Footer.contextTypes = {
  router: React.PropTypes.object
};

export default Footer;