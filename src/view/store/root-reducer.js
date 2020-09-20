import { combineReducers } from 'redux';
import auth_reducer from './reducer/auth.js';
import small_nav from './reducer/nav.js';

const root_reducer = combineReducers({
   auth: auth_reducer,
   nav: small_nav
});

export default root_reducer;