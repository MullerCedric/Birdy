import {
  LIST_CHANGED,
  BIRD_ADDED,
  BIRDS_CHANGED,
  SEND_LIST_SUCCESS,
  SEND_LIST_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  location: '',
  catchType: '',
  birds: {},
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case BIRD_ADDED:
      return { ...state, birds: action.payload };
    case SEND_LIST_SUCCESS:
      return { ...INITIAL_STATE };
    case SEND_LIST_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};