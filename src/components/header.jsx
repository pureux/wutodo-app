'use strict';

import React from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Build from 'material-ui/svg-icons/action/build';
import DoNotDisturb from 'material-ui/svg-icons/notification/do-not-disturb';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { palette } = this.props.muiTheme;
    return (
      <div>
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleClose}
          style={{color: palette.primary1Color}}>
          <AppBar onLeftIconButtonTouchTap={this.handleToggle} />
          <Menu style={{backgroundColor: palette.primary1Color}}>
            <MenuItem primaryText="Settings" leftIcon={<Build />} onTouchTap={this.handleClose} />
            <Divider />
            <MenuItem primaryText="Sign out" leftIcon={<DoNotDisturb />} onTouchTap={this.handleClose} />
          </Menu>
        </Drawer>
        <AppBar title={this.props.title} onLeftIconButtonTouchTap={this.handleToggle} />
      </div>
    );
  }
}

Header.propTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default muiThemeable()(Header);