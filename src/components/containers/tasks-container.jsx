'use strict';

import React from 'react';

import Tasks from '../tasks.jsx';

class TasksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] }
    this.onTaskCompleted = this.onTaskCompleted.bind(this);
  }

  componentDidMount() {
    let data = [
      {
        id: 1,
        name: 'Get dressed',
        description: 'Check the weather',
        completed: true
      },
      {
        id: 2,
        name: 'Brush your teeth',
        completed: true
      },
      {
        id: 3,
        name: 'Fix your hair',
        completed: false
      },
      {
        id: 4,
        name: 'Pack your backpack',
        description: 'Homework? Permission slip?',
        completed: false
      },
      {
        id: 5,
        name: 'Pack your lunch',
        description: 'Or eat school lunch',
        completed: false
      },
      {
        id: 6,
        name: 'Close doors',
        description: 'And turn off lights',
        completed: false
      },
      {
        id: 7,
        name: 'Feed the dogs',
        description: 'One scoop in each bowl',
        completed: false
      },
      {
        id: 8,
        name: 'Put shoes on',
        description: 'Gym today?',
        completed: false
      }
    ];    
    this.setState({tasks: data});
  }

  onTaskCompleted(id, isCompleted) {
    let updatedTasks = this.state.tasks.slice();
    for (let task of updatedTasks) {
      if (task.id === id) {
        task.completed = isCompleted;
        break;
      }
    }
    this.setState({tasks: updatedTasks});
  }
  
  render() {
    const { params } = this.props;
    return <Tasks listSlug={params.listSlug} onTaskCompleted={this.onTaskCompleted} tasks={this.state.tasks} userName={params.userName} />;
  }
}

export default (TasksContainer);