import {
  REGISTER_CHANGED,
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
    case REGISTER_CHANGED:
      return { ...state, error: '', [action.payload.prop]: action.payload.value };
    case REGISTERING_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return { ...INITIAL_STATE };
    case REGISTER_USER_FAIL:
      return { ...state, error: action.payload, isnNumber: '', loading: false };
    default:
      return state;
  }
};