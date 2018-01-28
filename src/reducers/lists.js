import {
  LIST_CHANGED,
  UPDATE_LOCATION,
  BIRD_ADDED,
  BIRDS_CHANGED,
  SEND_LIST_SUCCESS,
  SEND_LIST_FAIL,
  FETCH_LISTS,
  CHANGE_FILTER,
  CHANGE_EDITABLE,
  CHANGE_UPDATING_MODE,
  RESET_STATE,
  DELETE_LIST_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  isEditable: true,
  isUpdating: true,
  error: '',

  location: '',
  catchType: '',
  birds: {},
  
  allLists: {},
  onlyMine: false,
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
    case RESET_STATE:
      return { ...INITIAL_STATE, allLists: state.allLists };
    case SEND_LIST_FAIL:
      return { ...state, error: action.payload };
    case FETCH_LISTS:
      return { ...state, allLists: action.payload };
    case CHANGE_FILTER:
      return { ...state, onlyMine: action.payload };
    case CHANGE_EDITABLE:
      return { ...state, isEditable: action.payload };
    case CHANGE_UPDATING_MODE:
      return { ...state, isUpdating: action.payload };
    case DELETE_LIST_SUCCESS:
      let updatedLists = { ...state.allLists};
      delete updatedLists[action.payload];
      return { ...INITIAL_STATE, allLists: updatedLists};
    default:
      return state;
  }
};