import { combineReducers } from 'redux';

import nav from './nav';
import auth from './AuthReducer';
import register from './register';
import encyclopedia from './encyclopedia';
import lists from './lists';

export default combineReducers({
  nav,
  auth,
  register,
  encyclopedia,
  lists,
});
