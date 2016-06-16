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
  }

  renderList(list) {
    const path = 'tasks/' + this.props.userName + '/' + list.slug;
    return (
      <ListItem
        key={list.slug}
        primaryText={list.name}
        secondaryText={list.description}
        containerElement={<Link to={path} />}
        leftAvatar={<Avatar icon={<Assignment />} />}
      />
    );
  }

  render() {
    const { muiTheme, lists, userName } = this.props;
    const { palette } = muiTheme;
    const subtitle = '/' + userName;
    
    return (
      <div>
        <AppBar
          className="appBar"
          title={<span>Lists<small className="subtitle">{subtitle}</small></span>}
          iconElementLeft={
            <IconButton containerElement={<Link to="/" />}>
              <ArrowBack />
            </IconButton>
          }
          iconElementRight={
            <Avatar
              className="avatar"
              style={{backgroundColor: palette.primary1Color}}
              icon={<Person style={{fill: palette.primary2Color}} />}
            />
          }
        />
        <List>
          <Subheader inset={true}>Select a list</Subheader>
          {lists.map(this.renderList, this)}
        </List>
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