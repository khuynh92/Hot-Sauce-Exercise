import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../lib/store.js';

import Details from './Details.js';
import Dashboard from './Dashboard.js';
import Grid from './Grid.js';
import Routes from './Routes.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Route exact path='/' component={Grid} />
            <Routes />
          </Fragment>
        </ BrowserRouter>
      </Provider>
    );
  }
}
