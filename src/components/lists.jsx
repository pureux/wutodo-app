'use strict';

import React from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Avatar from 'material-ui/Avatar';
import Assignment from 'material-ui/svg-icons/action/assignment';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import { List, ListItem } from 'material-ui/List';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import People from 'material-ui/svg-icons/social/people';
import Person from 'material-ui/svg-icons/social/person';
import Subheader from 'material-ui/Subheader';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.data = [
      {
        slug: 'morning-routine',
        name: 'Morning Routine for School',
        description: 'To do every morning'
      },
      {
        slug: 'bedtime-routine',
        name: 'Bedtime Routine on School Nights',
        description: 'To do every night'
      },
      {
        slug: 'weekly-chores',
        name: 'Weekly Chores',
        description: 'To do throughout each week'
      }
    ];
  }

  renderLists() {
    const items = this.data.map((list) => {
      const path = 'tasks/' + this.props.params.userName + '/' + list.slug;
      return (
        <ListItem
          key={list.slug}
          primaryText={list.name}
          secondaryText={list.description}
          containerElement={<Link to={path} />}
          leftAvatar={<Avatar icon={<Assignment />} />}
        />
      );
    });

    return (
      <List>
        <Subheader inset={true}>Select a list</Subheader>
        {items}
        <small>{this.props.params.userName}</small>
      </List>
    );
  }

  render() {
    const content = this.renderLists();
    const { palette } = this.props.muiTheme;
    return (
      <div>
        <AppBar
          title="Lists"
          iconElementLeft={
            <IconButton containerElement={<Link to="/" />}>
              <ArrowBack />
            </IconButton>
          }
          iconElementRight={
            <Avatar
              style={{backgroundColor: palette.primary1Color, marginTop: "4px"}}
              icon={<Person style={{fill: palette.primary2Color}} />}
            />
          }
        />
        {content}
      </div>
    );
  }
}

Lists.contextTypes = {
  router: React.PropTypes.object
};

Lists.propTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default muiThemeable()(Lists);