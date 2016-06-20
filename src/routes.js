import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Index from './pages/Index';
import Scene from './pages/Scene';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="scene/:name" component={Scene} />
  </Route>
);
