import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Routes from 'modules/routes';
import withRoot from 'withRoot';

import Navigation from 'components/Navigation/Navigation';
import BottomNavigation from 'components/BottomNavigation/BottomNavigation';
import Home from 'containers/Home/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path={Routes.Home.path} component={Home} />
        </Switch>
        <BottomNavigation />
      </div>
    );
  }
}

App.propTypes = {};

export default withRoot(App);
