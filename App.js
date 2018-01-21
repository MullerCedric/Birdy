import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import firebase from 'firebase';
import { firebaseConfig } from './settings';

import { addNavigationHelpers } from 'react-navigation';
import Navigator from './src/config/routes';

const AppNav = ({ dispatch, nav }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppNavigation = connect(mapStateToProps)(AppNav);

export default class App extends Component {
  componentWillMount(){
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <AppNavigation />
      </Provider>
    );
  }
}
