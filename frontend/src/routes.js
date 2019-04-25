import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  ActivityScreen1,
  ActivityScreen2,
  ActivityReview,
} from './pages/Activity';
import { Row, Column } from './components/Grid';
import Header from './components/Header';
import Footer from './components/Footer';

const Hoop = () => (
  <Fragment>
    <Header />
    <Row>
      <Column size={{ desktop: 6, mobile: 12 }} shift={{ desktop: 3 }}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/create-an-activity"
              component={ActivityScreen1}
            />
            <Route exact path="/add-the-address" component={ActivityScreen2} />
            <Route exact path="/review-and-submit" component={ActivityReview} />
          </Switch>
        </BrowserRouter>
      </Column>
    </Row>
    <Footer />
  </Fragment>
);

export default Hoop;
