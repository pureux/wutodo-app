'use strict';

import React from 'react';

import Users from '../users.jsx';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] }
  }

  componentDidMount() {
    let data = [
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
    this.setState({users: data});
  }
  
  render() {
    return <Users users={this.state.users} />;
  }
}

export default (UsersContainer);