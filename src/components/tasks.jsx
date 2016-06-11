'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Tasks extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.params.tasksSlug} for {this.props.params.userName}</h1>
        <h2>Tasks</h2>
        <ul>
          <li>Task A</li>
          <li>Task B</li>
          <li>Task C</li>
          <li>Task D</li>
          <li>Task E</li>
          <li>Task F</li>
        </ul>
        <Link to={'lists/' + this.props.params.userName}>Return to lists</Link>
      </div>
    );
  }
}