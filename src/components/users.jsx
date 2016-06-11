'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          <li><Link to="/lists/emma">Emma</Link></li>
          <li><Link to="/lists/everett">Everett</Link></li>
        </ul>
      </div>
    );
  }
}