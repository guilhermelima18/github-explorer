/* eslint-disable no-use-before-define */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repository/:repository+" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
