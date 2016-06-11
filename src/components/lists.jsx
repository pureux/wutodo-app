'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Lists extends React.Component {
  render() {
    return (
      <div>
        <h1>Lists for {this.props.params.userName}</h1>
        <ul>
          <li><Link to={'tasks/' + this.props.params.userName + '/morning-routine'}>Morning Routine</Link></li>
          <li><Link to={'tasks/' + this.props.params.userName + '/chores'}>Chores</Link></li>
        </ul>
        <Link to="/">Return to users</Link>
        {this.props.children}
      </div>
    );
  }
}