import React, { Component } from 'react';
import { View } from 'react-native';

// import de composants ici

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';

import firebase from 'firebase';
import { firebaseConfig } from '~/settings';

export default class App extends Component {
  componentWillMount(){
    // Initialiser Firebase ici
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          // composant
        </View>
      </Provider>
    );
  }
}
