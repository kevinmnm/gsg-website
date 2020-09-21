import { combineReducers } from 'redux';
import auth_reducer from './reducer/auth.js';
import small_nav from './reducer/nav.js';
import window_size from './reducer/window.js';

const root_reducer = combineReducers({
   auth: auth_reducer,
   nav: small_nav,
   win: window_size
});

export default root_reducer;