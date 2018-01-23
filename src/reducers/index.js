import { combineReducers } from 'redux';

import nav from './nav';
import auth from './AuthReducer';

export default combineReducers({
  nav,
  auth,
});
