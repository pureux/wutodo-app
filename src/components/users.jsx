'use strict';

import React from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import People from 'material-ui/svg-icons/social/people';
import Person from 'material-ui/svg-icons/social/person';
import Subheader from 'material-ui/Subheader';
import muiThemeable from 'material-ui/styles/muiThemeable'

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  renderUser(user) {
    const path = '/lists/' + user.userName;
    return (
      <ListItem 
        key={user.userName}
        primaryText={user.firstName + ' ' + user.lastName}
        containerElement={<Link to={path} />}
        leftAvatar={<Avatar icon={<Person />} />}
      />
    );
  }
  
  render() {
    const { muiTheme, users } = this.props;
    const { palette } = muiTheme;

    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Wutodo"
          iconElementRight={
            <Avatar
              style={{backgroundColor: palette.primary1Color}}
              icon={<People style={{fill: palette.primary2Color}} />}
            />
          }
        />
        <List>
          <Subheader inset={true}>Select a person</Subheader>
          {users.map(this.renderUser, this)}
        </List>
      </div>
    );
  }
}

Users.contextTypes = {
  router: React.PropTypes.object
};

Users.propTypes = {
  muiTheme: React.PropTypes.object.isRequired,
  users: React.PropTypes.array.isRequired
};

export default muiThemeable()(Users);