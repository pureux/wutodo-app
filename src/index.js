'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Admin from './components/admin.jsx';
import App from './components/app.jsx';
import Lists from './components/lists.jsx';
import Tasks from './components/tasks.jsx';
import Users from './components/users.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Users} />
      <Route path="/lists/:userName" component={Lists} />
      <Route path="/tasks/:userName/:tasksSlug" component={Tasks} />
      <Route path="/admin" component={Admin} />
    </Route>
  </Router>,
  document.getElementById('app-container')
);