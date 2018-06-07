import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    HOME_GET_PROFILE_DEFAULT_SUCCESS,
    HOME_GET_PROFILE_DEFAULT_FAIL,
    HOME_COMMON_ERROR
} from '../constants/actionTypes';
import { BASE_URL_API, USER_TOKEN } from '../constants/constants';

export const getProfileDefault = () => async dispatch => {
    try {
        const url = `${BASE_URL_API}/profile/home`
        const userToken = await AsyncStorage.getItem(USER_TOKEN)
        
        console.log(url)
        const config = { headers: { 'x-access-token': userToken } }
        const response = await axios.get(url, config)

        console.log(response)
        dispatch({ type: HOME_GET_PROFILE_DEFAULT_SUCCESS, payload: response.data.data[0] })
    } catch (error) {
        // Error get profile default.
        if (error.response.data.message) {
            const message = error.response.data.message
            console.log(`Error get profile default: ${message}`)
            return dispatch({
                type: HOME_GET_PROFILE_DEFAULT_FAIL,
                payload: { errorMessage: message }
            })
        }

        // Error common.
        console.log(JSON.stringify(error))
        return dispatch({
            type: HOME_COMMON_ERROR,
            payload: { errorMessage: error }
        }) 
    }
} 
