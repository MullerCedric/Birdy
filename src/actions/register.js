import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import {
  REGISTER_CHANGED,
  REGISTERING_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from '../actions/types';

export const registerChanged = ({ prop, value }) => {
  return {
    type: REGISTER_CHANGED,
    payload: { prop, value }
  };
};

export const registerUser = ({ email, password, firstName, lastName, isnNumber }) => {
  return (dispatch) => {
    dispatch({ type: REGISTERING_USER });

    // Checks if the isn number exists in the DB before creating an account
    firebase.database().ref(`/isn-number/${isnNumber}`)
      .once('value', snapshot => {;
        if(!snapshot.val() || isnNumber.length !== 6) {
          registerUserFail(
            dispatch,
            'Le numéro ISN donné n\'est pas attribué'
          );
        } else {
          createAcount(
            dispatch, email, password, firstName, lastName, isnNumber
          );
        }
      });

  };
};

const createAcount = (
  dispatch, email, password, firstName, lastName, isnNumber
) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      
      firebase.database().ref('/users')
        .push({
          email,
          firstName,
          lastName,
          isnNumber,
        })
        .then(() => {

          firebase.database().ref(`/isn-number/${isnNumber}`)
            .remove()
            .then(() => {
              registerUserSuccess(dispatch);
            })
            .catch((error) => registerUserFail(
              dispatch,
              'Le numéro ISN ne s\'est pas supprimé'
            ));

        })
        .catch((error) => registerUserFail(
          dispatch,
          'Impossible d\'enregister l\'utilisateur'
        ));

    })
    .catch((error) => {
      registerUserFail(
        dispatch,
        'Impossible de créer le compte'
      )
    });
};

const registerUserFail = (dispatch, textError) => {
  dispatch({
    type: REGISTER_USER_FAIL,
    payload: textError,
  });
};

const registerUserSuccess = (dispatch) => {
  dispatch({ type: REGISTER_USER_SUCCESS });
  dispatch(NavigationActions.navigate({ routeName: 'SignIn' }));
};
