import React, { Component } from 'react';
import { Platform, BackHandler } from 'react-native';
import { Provider, connect } from 'react-redux';

import firebase from 'firebase';
import { firebaseConfig } from './settings';

import store from './src/config/store';

import { addNavigationHelpers } from 'react-navigation';
import Navigator from './src/config/routes'; //root-most navigation stack

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebaseConfig);

        if (Platform.OS !== 'android') return
        BackHandler.addEventListener('hardwareBackPress', () => {
            const { dispatch } = this.props
            dispatch({ type: 'Navigation/BACK' })
            return true
        })
    }

    componentWillUpdate(nextProps) {
        console.log('!!!!!UPDATE!!!!!');
        console.log(nextProps);
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') BackHandler.removeEventListener('hardwareBackPress')
    }

    render() {
        const { dispatch, nav } = this.props;
        const navigation = addNavigationHelpers({
            dispatch,
            state: nav
        });
        return <Navigator navigation={navigation} />/////////////
    }
}


//const mapStateToProps = ({ nav }) => ({ nav })
const mapStateToProps = state => {
  return { nav: state.nav, auth: state.auth }; // On rajoute auth juste pour voir en log le user
};
const RootNavigationStack = connect(mapStateToProps)(App);

const Root = () => (
    <Provider store={store}>
        <RootNavigationStack />
    </Provider>///////////////////////////////////
);

export default Root;