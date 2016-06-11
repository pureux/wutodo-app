'use strict';

import React from 'react';
import { Link } from 'react-router';

import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import { lime500, blueGrey500 } from 'material-ui/styles/colors';
import Person from 'material-ui/svg-icons/social/person';

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
          leftAvatar={<Avatar icon={<Person />} backgroundColor={blueGrey500} color={lime500} />}
        />
      );
    });

    return (
      <List>
        {items}
      </List>
    );
  }
  
  render() {
    const content = this.renderUsers();

    return (
      <div>
        <h1>Users</h1>
        {content}
      </div>
    );
  }
}

Users.contextTypes = {
  router: React.PropTypes.object
};

export default Users;