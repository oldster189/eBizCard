import { AsyncStorage } from 'react-native'
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk'
import axios from 'axios';
import { validateEmail, isEmpty, trimmingAndLowercase } from '../utils/util'

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL,
    LOGIN_VALUE_CHANGE,
    NORMAL_LOGIN_SUCCESS,
    REGISTER_VALUE_CHANGE,
    NORMAL_REGISTER_SUCCESS,
    LOGIN_USER_START,
    REGISTER_USER_START,
    LOGIN_SCREEN,
    REGISTER_SCREEN,
    FORGET_PASSWORD_SCREEN,
    TEXT_INPUT_IS_INVALID, 
    CREATE_PROFILE_SCREEN,
    CREATE_ACCOUNT_SOCIAL_SUCCESS,
    ERROR_NETWORK,

} from '../constants/actionTypes'
import {
    REGISTER_TYPE_NORMAL,
    BASE_URL_API,
    LOGIN_TYPE_NORMAL,
    USER_TOKEN,
    REGISTER_TYPE_SOCIAL,
} from '../constants/constants';

const { GraphRequest, GraphRequestManager } = FBSDK

export const facebookLogin = () => dispatch => {
    // const token = await AsyncStorage.getItem('fb_token')
    // console.log(`token: ${token}`)
    // if (token) {
    //     // Dispatch an action saying FB login is done
    //     dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    // } else {
    //     // Start up FB Login process 
    //     startLoginUser(dispatch)
    //     doFacebookLogin(dispatch)
    // }

    // Show loading progress.
    startLoginUser(dispatch)
    doFacebookLogin(dispatch)
}

const startLoginUser = (dispatch) => {
    dispatch({ type: LOGIN_USER_START })
}

const doFacebookLogin = async dispatch => {
    const { isCancelled } = await LoginManager.logInWithReadPermissions([
        'public_profile', 'email', 'user_birthday'])
    if (isCancelled) {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL })
    }

    // Get token facebook.
    const { accessToken } = await AccessToken.getCurrentAccessToken()
    if (accessToken !== null) {
        //Create response callback for fb_graph.
        const responseInfoCallback = async (errorGraphRequest, result) => {
            if (errorGraphRequest) {
                console.log(`Error get info fb_graph: ${errorGraphRequest}`)
                return dispatch({ type: FACEBOOK_LOGIN_FAIL })
            }
            // Check status page for chenge page.
            const statusPageResult = await getStatusForChangePage(dispatch, result.email)
            if (statusPageResult === 'ACCOUNT') {
                try {
                    // Register account for social
                    const response = await registerAccountSocial(dispatch, result.email)

                    // Save user_token to local storage
                    const userToken = response.data.token
                    await AsyncStorage.setItem(USER_TOKEN, userToken)

                    // Next to page Profile Screen.
                    dispatch({ type: CREATE_ACCOUNT_SOCIAL_SUCCESS, payload: result })
                } catch (errorAsyncStorage) {
                    console.log(`ErrorAsyncStorage: ${JSON.stringify(errorAsyncStorage)}`)
                    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
                }
            } else if (statusPageResult === 'PROFILE') {
                // Next to page Profile Screen.
                dispatch({ type: CREATE_ACCOUNT_SOCIAL_SUCCESS, payload: result })
            } else if (statusPageResult === 'HOME') {
                // Next to page Home Screen
                dispatch({ type: FACEBOOK_LOGIN_SUCCESS })
            }
        }

        // Get info data from fb graph api 
        const infoRequest = new GraphRequest(
            '/me',
            {
                accessToken,
                parameters: {
                    fields: {
                        string: 'email,name,first_name,middle_name,last_name,picture'
                    }
                }
            },
            responseInfoCallback
        );

        // Start the fb graph api request.
        new GraphRequestManager().addRequest(infoRequest).start()
    }
}

export const loginValueChange = ({ prop, value }) => {
    return {
        type: LOGIN_VALUE_CHANGE,
        payload: { prop, value }
    }
}

export const normalLogin = ({ email, password }) => {
    this.email = trimmingAndLowercase(email)
    this.password = trimmingAndLowercase(password)
    const payload = {}

    return async dispatch => {
        // Show loading progress.
        startLoginUser(dispatch)

        //Validate error input
        if (!this.email) {
            payload.errorEmail = 'Email is required.'
        } else if (!validateEmail(this.email)) {
            payload.errorEmail = 'Email is invalid e-mail address.'
        } else {
            delete payload.errorEmail
        }

        if (!this.password) {
            payload.errorPassword = 'Password is required.'
        } else {
            delete payload.errorPassword
        }

        if (!isEmpty(payload)) {
            // Show error message
            dispatch({ type: TEXT_INPUT_IS_INVALID, payload })
        } else {
            // Call service  
            try {
                const url = `${BASE_URL_API}/signin`
                const response = await axios.post(url, {
                    email: this.email,
                    password: this.password,
                    type: LOGIN_TYPE_NORMAL
                })
                const userToken = response.data.token

                // Save user_token to local storage
                await AsyncStorage.setItem(USER_TOKEN, userToken) 

                // Check status page for chenge page.
                const statusPageResult = await getStatusForChangePage(email)
                if (statusPageResult === 'PROFILE') {
                    dispatch({ type: CREATE_PROFILE_SCREEN })
                } else if (statusPageResult === 'HOME') {
                    dispatch({ type: NORMAL_LOGIN_SUCCESS })
                }
            } catch (error) {
                const message = error.response.data.message
                console.log(`Error Login: ${JSON.stringify(message)}`)
                dispatch({
                    type: ERROR_NETWORK,
                    payload: { errorMessage: message }
                })
            }
        }
    }
}

const getStatusForChangePage = async (dispatch, email) => {
    try {
        // const config = { headers: { 'x-access-token': userToken } }
        const response = await axios.get(
            `${BASE_URL_API}/status/profile/${email}`)
        return response.data.data.page
    } catch (error) {
        const message = error.response.data.message
        console.log(`Error Check State: ${message}`);
        return dispatch({
            type: ERROR_NETWORK,
            payload: { errorMessage: message }
        })
    }
}

const registerAccountSocial = async (dispatch, email) => {
    try {
        const url = `${BASE_URL_API}/signup`
        const response = await axios.post(url, {
            email,
            type: REGISTER_TYPE_SOCIAL
        })
        console.log(`Response Register Account: ${JSON.stringify(response.data)}`)
        return response
    } catch (error) {
        const message = error.response.data.message
        console.log(`Error Register Account: ${JSON.stringify(error.response.data)}`);
        return dispatch({
            type: ERROR_NETWORK,
            payload: { errorMessage: message }
        })
    }
}

const startRegisterUser = (dispatch) => {
    dispatch({ type: REGISTER_USER_START })
}

export const registerValueChange = ({ prop, value }) => {
    return {
        type: REGISTER_VALUE_CHANGE,
        payload: { prop, value }
    }
}

export const normalRegister = ({ email, password, rePassword }) => {
    this.email = trimmingAndLowercase(email)
    this.password = trimmingAndLowercase(password)
    this.rePassword = trimmingAndLowercase(rePassword)
    const payload = {}

    return async dispatch => {
        startRegisterUser(dispatch)
        if (this.email === '') {
            payload.errorEmail = 'Email is required.'
        } else if (!validateEmail(this.email)) {
            payload.errorEmail = 'Email is invalid e-mail address.'
        } else {
            delete payload.errorEmail
        }

        if (this.password === '') {
            payload.errorPassword = 'Password is required.'
        } else if (this.password.length < 6) {
            payload.errorPassword = 'Password at least 6 characters.'
        } else {
            delete payload.errorPassword
        }

        if (this.rePassword === '') {
            payload.errorRePassword = 'Confirm password is required.'
        } else if (this.password !== this.rePassword) {
            payload.errorRePassword = 'Confirm password not match.'
        } else {
            delete payload.errorRePassword
        }

        if (!isEmpty(payload)) {
            dispatch({ type: TEXT_INPUT_IS_INVALID, payload })
        } else {
            // Call service
            try {
                const response = await axios.post(`${BASE_URL_API}/signup`, {
                    email: this.email,
                    password: this.password,
                    type: REGISTER_TYPE_NORMAL
                })
                console.log(`Response Register: ${JSON.stringify(response.data)}`)
                dispatch({ type: NORMAL_REGISTER_SUCCESS, payload: response.data.token })
            } catch (error) {
                const message = error.response.data.message
                console.log(`Error Register: ${message}`)
                dispatch({
                    type: ERROR_NETWORK,
                    payload: { errorMessage: message }
                })
            }
        }
    }
}

export const forgetPasswordScreen = () => dispatch => {
    dispatch({ type: FORGET_PASSWORD_SCREEN })
}

export const loginScreen = () => dispatch => {
    dispatch({ type: LOGIN_SCREEN })
}

export const registerScreen = () => dispatch => {
    dispatch({ type: REGISTER_SCREEN })
}
