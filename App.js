import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';

import firebase from 'firebase';
import { firebaseConfig } from './settings';

import Navigator from './src/config/routes';

export default class App extends Component {
  componentWillMount(){
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Navigator onNavigationStateChange={null} />
      </Provider>
    );
  }
}
