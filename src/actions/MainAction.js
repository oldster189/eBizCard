import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    HOME_GET_PROFILE_DEFAULT_SUCCESS,
    HOME_GET_PROFILE_DEFAULT_FAIL,
    HOME_COMMON_ERROR,
    HOME_START_LOADING,
    HOME_RESET_TO_LOGIN_SCREEN
} from '../constants/actionTypes';
import { BASE_URL_API, USER_TOKEN, FACEBOOK_TOKEN, FACEBOOK_DATA, PROFILE_DATA } from '../constants/constants';

export const checkAuth = () => async dispatch => {
    try {
        // Start loading progress.
        homeStartLoading(dispatch)

        const fbToken = await AsyncStorage.getItem(FACEBOOK_TOKEN)
        const userToken = await AsyncStorage.getItem(USER_TOKEN)

        //isLoggedIn.
        if (fbToken) {
            const url = `${BASE_URL_API}/profile/home`
            const config = { headers: { 'x-access-token': userToken } }
            const response = await axios.get(url, config)

            const facebookDataRaw = await AsyncStorage.getItem(FACEBOOK_DATA)
            const facebookData = JSON.parse(facebookDataRaw)

            console.log('Get profile default successfully!!')
            return dispatch({
                type: HOME_GET_PROFILE_DEFAULT_SUCCESS,
                payload: {
                    profileData: response.data.data[0],
                    facebookData
                }
            })
        } else if (userToken) {
            const url = `${BASE_URL_API}/profile/home`
            const config = { headers: { 'x-access-token': userToken } }
            const response = await axios.get(url, config)

            const profileDataRaw = JSON.stringify(response.data.data[0]) 
            await AsyncStorage.setItem(PROFILE_DATA, profileDataRaw)
            console.log('Get profile default successfully!!')
            
            return dispatch({
                type: HOME_GET_PROFILE_DEFAULT_SUCCESS,
                payload: {
                    profileData: response.data.data[0]
                }
            })
        }


        // Go to page LoginScreen.
        return dispatch({ type: HOME_RESET_TO_LOGIN_SCREEN })
    } catch (error) {
        // Error common.
        console.log(JSON.stringify(error))
        return dispatch({
            type: HOME_COMMON_ERROR,
            payload: { errorMessage: error }
        })
    }
}


const getProfileDefault = async (dispatch, userToken) => {
    try {
        const url = `${BASE_URL_API}/profile/home`
        const config = { headers: { 'x-access-token': userToken } }
        const response = await axios.get(url, config)

        console.log('Get profile default successfully!!')
        return response.data.data[0]
    } catch (error) {
        // Error get profile default.
        if (error.response.data.message) {
            const message = error.response.data.message
            console.log(`Error get profile default: ${message}`)
            // return dispatch({
            //     type: HOME_GET_PROFILE_DEFAULT_FAIL,
            //     payload: { errorMessage: message }
            // })
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
