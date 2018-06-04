import { combineReducers } from 'redux'; 

import NavReducer from './NavReducer';
import AuthReducer from './AuthReducer';
import CreateProfileReducer from './CreateProfileReducer';
import CreatePhotoCardReducer from './CreatePhotoCardReducer';
import MainReducer from './MainReducer';
  
export default combineReducers({
    nav: NavReducer,
    auth: AuthReducer,
    createProfile: CreateProfileReducer,
    createPhotoCard: CreatePhotoCardReducer,
    mainProfile: MainReducer
});
