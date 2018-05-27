import {
  LOGIN,
  LOGOUT,
  LOGIN_VALUE_CHANGE,
  REGISTER_VALUE_CHANGE,
  NORMAL_REGISTER_NOT_MATCH_PASSWORD,
  NORMAL_LOGIN_SUCCESS,
  NORMAL_REGISTER_SUCCESS,
  LOGIN_USER_START,
  REGISTER_USER_START,
  REGISTER_SCREEN,
  LOGIN_SCREEN
} from '../constants/actionTypes';

const initialState = {
  email: '',
  password: '',
  rePassword: '',
  isLoggedIn: false,
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  console.log(`Action: ${JSON.stringify(action)} \nState: ${JSON.stringify(state)}`);
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    case LOGIN_VALUE_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value, error: '' };
    case REGISTER_VALUE_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value, error: '' };
    case NORMAL_REGISTER_NOT_MATCH_PASSWORD:
      return {
        ...state,
        error: 'not match password',
        loading: false,
      };
    case NORMAL_LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        rePassword: '',
        isLoggedIn: false,
        error: '',
        loading: false
      };
    case NORMAL_REGISTER_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        rePassword: '',
        isLoggedIn: false,
        error: '',
        loading: false
      };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_START:
      return { ...state, loading: true, error: '' };
    case REGISTER_SCREEN:
      return { ...state, password: '', rePassword: '' }
    case LOGIN_SCREEN:
      return { ...state, password: '', rePassword: '' }
    default:
      return state;
  }
}; 
