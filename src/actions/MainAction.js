import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    HOME_GET_PROFILE_DEFAULT_SUCCESS,
    HOME_GET_PROFILE_DEFAULT_FAIL,
    HOME_COMMON_ERROR,
    HOME_START_LOADING, 
    HOME_RESET_TO_LOGIN_SCREEN
} from '../constants/actionTypes';
import { BASE_URL_API, USER_TOKEN, FACEBOOK_TOKEN } from '../constants/constants';

export const checkAuth = () => async dispatch => {
    try {
        // Start loading progress.
        homeStartLoading(dispatch)

        const fbToken = await AsyncStorage.getItem(FACEBOOK_TOKEN)
        const userToken = await AsyncStorage.getItem(USER_TOKEN)

        //isLoggedIn 
        if (fbToken || userToken) {
            getProfileDefault()
        } else {
            dispatch({ type: HOME_RESET_TO_LOGIN_SCREEN })
        }
    } catch (error) {
        // Error common.
        console.log(JSON.stringify(error))
        dispatch({
            type: HOME_COMMON_ERROR,
            payload: { errorMessage: error }
        })
    }
}


export const getProfileDefault = () => async dispatch => {
    try { 
        const url = `${BASE_URL_API}/profile/home`
        const userToken = await AsyncStorage.getItem(USER_TOKEN)

        const config = { headers: { 'x-access-token': userToken } }
        const response = await axios.get(url, config)

        console.log('Get profile default successfully!!')
        dispatch({
            type: HOME_GET_PROFILE_DEFAULT_SUCCESS,
            payload: response.data.data[0]
        })
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

const homeStartLoading = dispatch => {
    dispatch({ type: HOME_START_LOADING })
}
