'use strict';

import React from 'react';
import { Link } from 'react-router';

import Checkbox from 'material-ui/Checkbox';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: 'Get dressed',
        completed: true
      },
      {
        name: 'Brush your teeth',
        completed: true
      },
      {
        name: 'Fix your hair',
        completed: false
      },
      {
        name: 'Pack your backpack',
        completed: false
      },
      {
        name: 'Put shoes on',
        completed: false
      },
      {
        name: 'Feed the dogs',
        completed: false
      }
    ];
  }

  renderTasks() {
    const items = [];
    this.data.forEach((task) => {
      items.push(
          <Checkbox
            key={task.name}
            label={task.name}
            defaultChecked={task.completed}
          />
      );
    });

    return items;
  }

  render() {
    const content = this.renderTasks();
    return (
      <div>
        <h1>{this.props.params.tasksSlug} for {this.props.params.userName}</h1>
        <h2>Tasks</h2>
        {content}
        <Link to={'lists/' + this.props.params.userName}>Return to lists</Link>
      </div>
    );
  }
}

export default Tasks;