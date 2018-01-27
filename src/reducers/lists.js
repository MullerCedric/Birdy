import {
  LIST_CHANGED,
  UPDATE_LOCATION,
  BIRD_ADDED,
  BIRDS_CHANGED,
  SEND_LIST_SUCCESS,
  SEND_LIST_FAIL,
  FETCH_LISTS,
  CHANGE_EDITABLE
} from '../actions/types';

const INITIAL_STATE = {
  isEditable: true,
  location: '',
  catchType: '',
  birds: {},
  error: '',
  allLists: {},
  refreshing: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_CHANGED:
      return { ...state, error: '', [action.payload.prop]: action.payload.value };
    case UPDATE_LOCATION:
      return { ...state, location: action.payload };
    case BIRD_ADDED:
      return { ...state, birds: action.payload };
    case BIRDS_CHANGED:
      let newState = {...state};
      newState['birds'][action.payload.uid][action.payload.prop] = action.payload.value;
      return newState;
    case SEND_LIST_SUCCESS:
      return { ...INITIAL_STATE };
    case SEND_LIST_FAIL:
      return { ...state, error: action.payload };
    case FETCH_LISTS:
      return { ...state, allLists: action.payload };
    case CHANGE_EDITABLE:
      return { ...state, isEditable: action.payload };
    default:
      return state;
  }
};