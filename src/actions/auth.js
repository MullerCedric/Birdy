import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import {
  AUTH_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGGING_USER,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
} from './types';

export const authChanged = ({ prop, value }) => {
  return {
    type: AUTH_CHANGED,
    payload: { prop, value }
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGGING_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => loginUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  dispatch(NavigationActions.navigate({ routeName: 'SignedInHomeStack' }));
};

export const logoutUser = (navigation) => {
  return (dispatch) => {
    dispatch({ type: LOGGING_USER });

    firebase.auth().signOut()
      .then(() => logoutUserSuccess(dispatch, navigation))
      .catch((error) => alert(error));
  };
};

const logoutUserSuccess = (dispatch, navigation) => {
  dispatch({
    type: LOGOUT_USER_SUCCESS
  });
}
