import { GET_PROFILE_ALL_DATA } from '../constants/actionTypes'

const initialState = {
    data: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case GET_PROFILE_ALL_DATA:
    return { ...state, data: action.payload };

  default:
    return state
  }
};
