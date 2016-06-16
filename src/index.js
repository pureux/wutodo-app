'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Admin from './components/admin.jsx';
import App from './components/app.jsx';
import ListsContainer from './components/containers/lists-container.jsx';
import TasksContainer from './components/containers/tasks-container.jsx';
import UsersContainer from './components/containers/users-container.jsx';

injectTapEventPlugin();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={UsersContainer} />
      <Route path="/lists/:userName" component={ListsContainer} />
      <Route path="/tasks/:userName/:listSlug" component={TasksContainer} />
      <Route path="/admin" component={Admin} />
    </Route>
  </Router>,
  document.getElementById('app-container')
);