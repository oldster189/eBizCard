import {
  HOME_START_LOADING,
  HOME_GET_PROFILE_DEFAULT_SUCCESS,
  HOME_GET_PROFILE_DEFAULT_FAIL,
  HOME_COMMON_ERROR,
  HOME_RESET_TO_LOGIN_SCREEN
} from '../constants/actionTypes'

const initialState = {
  info: {
    _id: '',
    profile_image: '',
    profile_name: '',
    account_id: {
      _id: '',
      email: '',
      type: ''
    }
  },
  detail: {
    language: {
      _id: '',
      abbreviation: '',
      name: ''
    },
    _id: '',
    info_prefix: '',
    first_name: '',
    last_name: '',
    suffix: '',
    mobile_phone: '',
    mobile_phone_second: '',
    email: '',
    email_second: '',
    company_name: '',
    position: '',
    company_address: '',
    company_phone: '',
    company_fax: '',
    businness_type: '',
    profile_info: {
      _id: '',
      profile_image: '',
      profile_name: '',
      account_id: ''
    }
  },
  profileData: null,
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
      console.log(action.payload)
      return {
        ...state,
        info: action.payload.info,
        detail: action.payload.detail[0],
        profileData: action.payload,
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
    case HOME_RESET_TO_LOGIN_SCREEN: 
    return {
      ...state,
      errorMessage: '',
      loading: false
    }
    default:
      return state
  }
};
