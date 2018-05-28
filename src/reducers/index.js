import { combineReducers } from 'redux'; 

import NavReducer from './NavReducer';
import AuthReducer from './AuthReducer';
import CreateProfileReducer from './CreateProfileReducer';
  
export default combineReducers({
    nav: NavReducer,
    auth: AuthReducer,
    createProfile: CreateProfileReducer,
});
