import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import {
  LIST_CHANGED,
  UPDATE_LOCATION,
  BIRD_ADDED,
  SELECT_BIRD,
  BIRDS_CHANGED,
  SEND_LIST_SUCCESS,
  SEND_LIST_FAIL,
} from './types';

export const listChanged = ({ prop, value }) => {
  return {
    type: LIST_CHANGED,
    payload: { prop, value }
  };
};

export const updateLocation = (pos) => {
  return {
    type: UPDATE_LOCATION,
    payload: pos
  };
};

export const birdAdded = (birds) => {
  return {
    type: BIRD_ADDED,
    payload: birds
  };
};

export const selectBird = (birdUid) => {
  return {
    type: SELECT_BIRD,
    payload: birdUid
  };
};

export const birdsChanged = ({ uid, prop, value }) => {
  return {
    type: BIRDS_CHANGED,
    payload: { uid, prop, value }
  };
};

export const sendList = ({ location, catchType, birds }) => {
  const { currentUser } = firebase.auth();
  const userId = currentUser.uid
  let now = new Date();
  now = now.getTime();

  return (dispatch) => {
    firebase.database().ref('/lists')
      .push({
        userId,
        now,
        location,
        catchType,
        birds
      })
      .then(() => {
        dispatch({ type: SEND_LIST_SUCCESS });
        dispatch(NavigationActions.navigate({ routeName: 'MyLists' }));
      })
      .catch((error) => {
        dispatch({
          type: SEND_LIST_FAIL,
          payload: 'Impossible d\'enregister la liste'
        });
        console.log('List issue: ' + error);
      });

  };
};
