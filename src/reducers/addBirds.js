import {
  LIST_CHANGED,
  BIRDS_CHANGED,
  SEND_LIST_SUCCESS,
  SEND_LIST_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  location: '',
  catchType: '',
  birds: {
    0: {
      name: 'Hello'
    }
  },
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case SEND_LIST_SUCCESS:
      return { ...INITIAL_STATE };
    case SEND_LIST_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};