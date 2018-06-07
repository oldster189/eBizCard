import {
  HOME_START_LOADING,
  HOME_GET_PROFILE_DEFAULT_SUCCESS,
  HOME_GET_PROFILE_DEFAULT_FAIL,
  HOME_COMMON_ERROR
} from '../constants/actionTypes'

const initialState = {
  data: null,
  errorMessage: '',
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_START_LOADING:
      return {
        ...state,
        errorMessage: '',
        loading: true
      }
    case HOME_GET_PROFILE_DEFAULT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        errorMessage: '',
        loading: false,
      };
    case HOME_GET_PROFILE_DEFAULT_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        loading: false
      }
    case HOME_COMMON_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        loading: false
      }
    default:
      return state
  }
};
