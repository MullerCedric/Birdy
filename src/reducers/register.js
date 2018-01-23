import {
  NEW_EMAIL_CHANGED,
  NEW_PASSWORD_CHANGED,
  FIRST_CHANGED,
  LAST_CHANGED,
  ISN_CHANGED,
  REGISTERING_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  isnNumber: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case NEW_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case FIRST_CHANGED:
      return { ...state, firstName: action.payload };
    case LAST_CHANGED:
      return { ...state, lastName: action.payload };
    case ISN_CHANGED:
      return { ...state, isnNumber: action.payload };
    case REGISTERING_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return { ...INITIAL_STATE };
    case REGISTER_USER_FAIL:
      return { ...state, error: action.payload, password: '', loading: false };
    default:
      return state;
  }
};