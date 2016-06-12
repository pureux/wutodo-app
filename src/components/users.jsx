'use strict';

import React from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import People from 'material-ui/svg-icons/social/people';
import Person from 'material-ui/svg-icons/social/person';
import Subheader from 'material-ui/Subheader';
import muiThemeable from 'material-ui/styles/muiThemeable';

// import Header from './header.jsx';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.data = [
      {
        userName: 'emma',
        firstName: 'Emma',
        lastName: 'Franklin'
      },
      {
        userName: 'everett',
        firstName: 'Everett',
        lastName: 'Franklin'
      }
    ];
  }

  renderUsers() {
    const items = this.data.map((user) => {
      const path = '/lists/' + user.userName;
      return (
        <ListItem 
          key={user.userName}
          primaryText={user.firstName + ' ' + user.lastName}
          containerElement={<Link to={path} />}
          leftAvatar={<Avatar icon={<Person />} />}
        />
      );
    });

    return (
      <List>
        <Subheader inset={true}>Select a person</Subheader>
        {items}
      </List>
    );
  }
  
  render() {
    const content = this.renderUsers();
    const { palette } = this.props.muiTheme;
    // <Header title="Home" />

    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Wutodo"
          iconElementRight={
            <Avatar
              style={{backgroundColor: palette.primary1Color, marginTop: "4px"}}
              icon={<People style={{fill: palette.primary2Color}} />}
            />
          }
        />
        {content}
      </div>
    );
  }
}

Users.contextTypes = {
  router: React.PropTypes.object
};

Users.propTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default muiThemeable()(Users);