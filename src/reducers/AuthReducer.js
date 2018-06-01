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
  FORGET_PASSWORD_SCREEN
} from '../constants/actionTypes';

const initialState = {
  email: '',
  password: '',
  rePassword: '',
  isLoggedIn: false,
  loading: false,
  errorEmail: '',
  errorPassword: '',
  errorRePassword: '',
};

export default (state = initialState, action) => {
  console.log(`Action: ${JSON.stringify(action)} \nState: ${JSON.stringify(state)}`);

  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    case LOGIN_VALUE_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value, };
    case REGISTER_VALUE_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value, };
    case NORMAL_LOGIN_SUCCESS:
      return {
        ...state,
        password: '',
        rePassword: '',
        isLoggedIn: true,
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        loading: false
      };
    case NORMAL_REGISTER_SUCCESS:
      return {
        ...state,
        password: '',
        rePassword: '',
        isLoggedIn: true,
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
        loading: false
      };
    case TEXT_INPUT_IS_INVALID:
      return {
        ...state,
        errorEmail: action.payload.errorEmail,
        errorPassword: action.payload.errorPassword,
        errorRePassword: action.payload.errorRePassword,
        loading: false,
      }
    case LOGIN_USER_START:
      return {
        ...state,
        loading: true,
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
      };
    case REGISTER_USER_START:
      return {
        ...state,
        loading: true,
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
      };
    case REGISTER_SCREEN:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
      }
    case LOGIN_SCREEN:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
      }
    case FORGET_PASSWORD_SCREEN:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
      }
    default:
      return {
        ...state,
        password: '',
        rePassword: '',
        errorEmail: '',
        errorPassword: '',
        errorRePassword: '',
      };
  }
}; 
