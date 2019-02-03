import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ActivityScreen1, ActivityScreen2 } from './pages/Activity';

const Hoop = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ActivityScreen1} />
      <Route exact path="/add-the-address" component={ActivityScreen2} />
    </Switch>
  </BrowserRouter>
);

export default Hoop;
