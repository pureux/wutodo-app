'use strict';

import React from 'react';
import { Link } from 'react-router';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        slug: 'morning-routine',
        name: 'Morning Routine'
      },
      {
        slug: 'weekly-chores',
        name: 'Weekly Chores'
      }
    ];
  }

  renderLists() {
    const items = [];
    this.data.forEach((list) => {
      items.push(
        <li key={list.slug}>
          <Link to={'tasks/' + this.props.params.userName + '/' + list.slug}>
            {list.name}
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
    const content = this.renderLists();
    return (
      <div>
        <h1>Lists for {this.props.params.userName}</h1>
        {content}
        <Link to="/">Return to users</Link>
      </div>
    );
  }
}

export default Lists;