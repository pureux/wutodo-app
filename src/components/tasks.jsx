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
  }

  renderTask(task) {
    return (
      <ListItem
        key={task.name}
        primaryText={task.name}
        secondaryText={task.description}
        className={'checkbox' + (task.completed ? ' checked' : '')}
        leftCheckbox={<Checkbox defaultChecked={task.completed} />}
      />
    );
  }

  render() {
    const { listSlug, muiTheme, tasks, userName } = this.props;
    const { palette } = muiTheme;
    const subtitle = '/' + userName + '/' + listSlug;
    
    return (
      <div>
        <AppBar
          className="appBar"
          title={<span>Tasks<small className="subtitle">{subtitle}</small></span>}
          iconElementLeft={
            <IconButton containerElement={<Link to={'lists/' + userName} />}>
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
      <List>
      <Subheader inset={true}>Complete the tasks</Subheader>
        {tasks.map(this.renderTask, this)}
      </List>
      </div>
    );
  }
}

Tasks.propTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default muiThemeable()(Tasks);