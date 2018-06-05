import axios from 'axios';
import { GET_PROFILE_ALL_DATA } from '../constants/actionTypes';
import { BASE_URL } from '../constants/constants';

export const getProfileAllData = () => async dispatch => {
    const url = `${BASE_URL}?username=admin&password=password&type=foods`

    axios.get(url)
        .then(res => { 
            dispatch({ type: GET_PROFILE_ALL_DATA, payload: res.data.youtubes })
        })
}
