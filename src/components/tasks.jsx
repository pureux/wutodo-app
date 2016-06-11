'use strict';

import React from 'react';
import { Link } from 'react-router';

import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import AssignmentReturn from 'material-ui/svg-icons/action/assignment-return';
import { List, ListItem } from 'material-ui/List';

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
    const items = this.data.map((task) => {
      return (
        <ListItem
          key={task.name}
          primaryText={task.name}
          leftCheckbox={<Checkbox defaultChecked={task.completed} />}
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
    const content = this.renderTasks();
    
    return (
      <div>
        <h1>{this.props.params.tasksSlug} for {this.props.params.userName}</h1>
        {content}
        <FlatButton
          containerElement={<Link to={'lists/' + this.props.params.userName} />}
          icon={<AssignmentReturn />}
          label="Lists"
          linkButton={true}
        />
      </div>
    );
  }
}

export default Tasks;