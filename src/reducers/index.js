import { combineReducers } from 'redux';

import nav from './nav';
import auth from './AuthReducer';
import register from './register';

export default combineReducers({
  nav,
  auth,
  register,
});
