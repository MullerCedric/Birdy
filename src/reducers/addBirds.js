import {
  LIST_CHANGED,
  UPDATE_LOCATION,
  BIRD_ADDED,
  SELECT_BIRD,
  BIRDS_CHANGED,
  SEND_LIST_SUCCESS,
  SEND_LIST_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  location: '',
  catchType: '',
  birds: {},
  error: '',
  selectedBird: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_CHANGED:
      return { ...state, error: '', [action.payload.prop]: action.payload.value };
    case UPDATE_LOCATION:
      return { ...state, location: action.payload };
    case BIRD_ADDED:
      return { ...state, birds: action.payload };
    case SELECT_BIRD:
      return { ...state, selectedBird: action.payload };
    case BIRDS_CHANGED:
      let newState = {...state};
      newState['birds'][action.payload.uid][action.payload.prop] = action.payload.value;
      return newState;
    case SEND_LIST_SUCCESS:
      return { ...INITIAL_STATE };
    case SEND_LIST_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};