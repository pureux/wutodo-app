'use strict';

import React from 'react';

import Tasks from '../tasks.jsx';

class TasksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] }
  }

  componentDidMount() {
    let data = [
      {
        name: 'Get dressed',
        description: 'Check the weather',
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
        description: 'Homework? Permission slip?',
        completed: false
      },
      {
        name: 'Pack your lunch',
        description: 'Or eat school lunch',
        completed: false
      },
      {
        name: 'Close doors',
        description: 'And turn off lights',
        completed: false
      },
      {
        name: 'Feed the dogs',
        description: 'One scoop in each bowl',
        completed: false
      },
      {
        name: 'Put shoes on',
        description: 'Gym today?',
        completed: false
      }
    ];    
    this.setState({tasks: data});
  }
  
  render() {
    const { params } = this.props;
    return <Tasks listSlug={params.listSlug} tasks={this.state.tasks} userName={params.userName} />;
  }
}

export default (TasksContainer);