import { 
    FACEBOOK_LOGIN_SUCCESS
 } from '../actions/types';

 const initialState = {
 
 };
 
 export default (state = initialState, action) => {
   console.log(action);
   switch (action.type) { 
   case FACEBOOK_LOGIN_SUCCESS:
     return { ...state }; 
   default:
     return state;
   }
 }; 
