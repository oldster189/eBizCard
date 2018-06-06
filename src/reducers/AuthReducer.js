import {
  LOGIN,
  LOGOUT,
  LOGIN_VALUE_CHANGE,
  REGISTER_VALUE_CHANGE,
  NORMAL_LOGIN_SUCCESS,
  NORMAL_REGISTER_SUCCESS,
  LOGIN_USER_START,
  REGISTER_USER_START,
  REGISTER_SCREEN,
  LOGIN_SCREEN,
  TEXT_INPUT_IS_INVALID,
  FORGET_PASSWORD_SCREEN,
  CREATE_ACCOUNT_SOCIAL_SUCCESS,
  FACEBOOK_LOGIN_SUCCESS,
  NORMAL_REGISTER_FAIL, 
  CREATE_PROFILE_SCREEN,
  FACEBOOK_LOGIN_FAIL,
  ERROR_NETWORK
} from '../constants/actionTypes';
import { USER_TYPE_FACEBOOK, USER_TYPE_NORMAL } from '../constants/constants';

const initialState = {
  email: '',
  fbId: '',
  firstName: '',
  middleName: '',
  lastName: '',
  fullName: '',
  link_image: '',
  password: '',
  rePassword: '',
  user_token: '',
  isLoggedIn: false,
  loading: false,
  userType: USER_TYPE_NORMAL,
  errorMessage: '',
  errorEmail: '',
  errorPassword: '',
  errorRePassword: '',
};

export default (state = initialState, action) => {
  console.log(`Action: ${JSON.stringify(action)} State: ${JSON.stringify(state)}`);

  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    case LOGIN_VALUE_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value, };
    case REGISTER_VALUE_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value, };
    case CREATE_ACCOUNT_SOCIAL_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        fbId: action.payload.id,
        firstName: action.payload.first_name,
        middleName: action.payload.middle_name,
        lastName: action.payload.last_name,
        fullName: action.payload.name,
        link_image: action.payload.picture.data.url,
        userType: USER_TYPE_FACEBOOK,
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        isLoggedIn: true,
        loading: false,
      }
    case FACEBOOK_LOGIN_SUCCESS:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        isLoggedIn: true,
        loading: false,
      }
    case FACEBOOK_LOGIN_FAIL:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        isLoggedIn: true,
        loading: false,
      }
    case ERROR_NETWORK:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorMessage: action.payload.errorMessage,
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        isLoggedIn: true,
        loading: false,
      }
    case NORMAL_LOGIN_SUCCESS:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        userType: USER_TYPE_NORMAL,
        isLoggedIn: true,
        loading: false
      }; 
    case NORMAL_REGISTER_SUCCESS:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        userType: USER_TYPE_NORMAL,
        isLoggedIn: true,
        loading: false
      };
    case NORMAL_REGISTER_FAIL:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorMessage: action.payload.errorMessage,
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        loading: false
      }
    case TEXT_INPUT_IS_INVALID:
      return {
        ...state,
        errorMessage: '',
        errorEmail: action.payload.errorEmail,
        errorPassword: action.payload.errorPassword,
        errorRePassword: action.payload.errorRePassword,
        loading: false,
      }
    case LOGIN_USER_START:
      return {
        ...state,
        loading: true,
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
      };
    case REGISTER_USER_START:
      return {
        ...state,
        loading: true,
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
      };
    case REGISTER_SCREEN:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        loading: false
      }
    case LOGIN_SCREEN:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        loading: false
      }
    case FORGET_PASSWORD_SCREEN:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        loading: false
      }
    case CREATE_PROFILE_SCREEN:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        isLoggedIn: true,
        loading: false
      }
    default:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorMessage: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        loading: false
      };
  }
}; 
