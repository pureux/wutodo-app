'use strict';

import React from 'react';
import { Link } from 'react-router';

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
  
  handleUserClick(event) {
    const path = '/';
    this.context.router.push(path);
  }

  renderUsers() {
    const items = [];
    this.data.forEach((user) => {
      items.push(
        <li key={user.userName}>
          <Link to={'/lists/' + user.userName}>
            {user.firstName} {user.lastName}
          </Link>
        </li>
      );
    });

    return (
      <ul>
        {items}
      </ul>
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

export default Users;