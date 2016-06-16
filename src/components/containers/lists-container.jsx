'use strict';

import React from 'react';

import Lists from '../lists.jsx';

class ListsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lists: [] }
  }

  componentDidMount() {
    let data = [
      {
        slug: 'morning-routine',
        name: 'Morning Routine',
        description: 'To do every morning'
      },
      {
        slug: 'bedtime-routine',
        name: 'Bedtime Routine',
        description: 'To do every night'
      },
      {
        slug: 'weekly-chores',
        name: 'Weekly Chores',
        description: 'To do throughout each week'
      }
    ];
    this.setState({lists: data});
  }
  
  render() {
    return <Lists lists={this.state.lists} userName={this.props.params.userName} />;
  }
}

export default (ListsContainer);