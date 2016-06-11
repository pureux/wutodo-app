'use strict';

import React from 'react';
import { Link } from 'react-router';

import Avatar from 'material-ui/Avatar';
import Assignment from 'material-ui/svg-icons/action/assignment';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import People from 'material-ui/svg-icons/social/people';
import { lime500, blueGrey500 } from 'material-ui/styles/colors';

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
    const items = this.data.map((list) => {
      const path = 'tasks/' + this.props.params.userName + '/' + list.slug;
      return (
        <ListItem
          key={list.slug}
          primaryText={list.name}
          containerElement={<Link to={path} />}
          leftAvatar={<Avatar icon={<Assignment />} backgroundColor={blueGrey500} color={lime500} />}
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
    const content = this.renderLists();

    return (
      <div>
        <h1>Lists for {this.props.params.userName}</h1>
        {content}
        <FlatButton
          containerElement={<Link to="/" />}
          icon={<People />}
          label="Users"
          linkButton={true}
        />
      </div>
    );
  }
}

Lists.contextTypes = {
  router: React.PropTypes.object
};

export default Lists;