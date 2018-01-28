import {
  AUTH_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGGING_USER,
  LOGOUT_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_CHANGED:
      return { ...state, error: '', [action.payload.prop]: action.payload.value };
    case LOGGING_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case LOGOUT_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};