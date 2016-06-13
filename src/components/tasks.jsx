'use strict';

import React from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Avatar from 'material-ui/Avatar';
import Assignment from 'material-ui/svg-icons/action/assignment';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import { List, ListItem } from 'material-ui/List';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import Subheader from 'material-ui/Subheader';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.data = [
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
  }

  renderTasks() {
    const items = this.data.map((task) => {
      return (
        <ListItem
          key={task.name}
          primaryText={task.name}
          secondaryText={task.description}
          leftCheckbox={<Checkbox defaultChecked={task.completed} />}
        />
      );
    });

    return (
      <List>
        <Subheader inset={true}>Complete the tasks</Subheader>
        {items}
      </List>
    );
  }

  render() {
    const content = this.renderTasks();
    const { palette } = this.props.muiTheme;
    const subtitle = '/' + this.props.params.userName + '/' + this.props.params.listSlug;
    
    return (
      <div>
        <AppBar
          className="appBar"
          title={<span>Tasks<small className="subtitle">{subtitle}</small></span>}
          iconElementLeft={
            <IconButton containerElement={<Link to={'lists/' + this.props.params.userName} />}>
              <ArrowBack />
            </IconButton>
          }
          iconElementRight={
            <Avatar
              className="avatar"
              style={{backgroundColor: palette.primary1Color}}
              icon={<Assignment style={{fill: palette.primary2Color}} />}
            />
          }
        />
        {content}
      </div>
    );
  }
}

Tasks.propTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default muiThemeable()(Tasks);