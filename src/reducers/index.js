import { combineReducers } from 'redux'; 

import NavReducer from './NavReducer';
import AuthReducer from './AuthReducer';
import CreateProfileReducer from './CreateProfileReducer';
import CreatePhotoCardReducer from './CreatePhotoCardReducer';
  
export default combineReducers({
    nav: NavReducer,
    auth: AuthReducer,
    createProfile: CreateProfileReducer,
    createPhotoCard: CreatePhotoCardReducer
});
