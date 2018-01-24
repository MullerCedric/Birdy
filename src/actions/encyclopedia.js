import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { INFOS_FETCH_SUCCESS } from './types';

export const infosFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/encyclopedia')
      .on('value', snapshot => {
        dispatch({ type: INFOS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
