import { 
    CREATE_PROFILE_VALUE_CHANGE
 } from '../constants/actionTypes';

export const createProfileValueChange = ({ prop, value }) => {
    return {
        type: CREATE_PROFILE_VALUE_CHANGE,
        payload: { prop, value }
    }
}
