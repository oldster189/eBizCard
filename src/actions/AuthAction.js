import { AsyncStorage } from 'react-native'
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk' 
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

} from '../constants/actionTypes'

const { GraphRequest, GraphRequestManager } = FBSDK

const startLoginUser = (dispatch) => {
    dispatch({ type: LOGIN_USER_START })
}

export const facebookLogin = () => async dispatch => {
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
    startLoginUser(dispatch)
    doFacebookLogin(dispatch)
}

const doFacebookLogin = async dispatch => {
    const { isCancelled } = await LoginManager.logInWithReadPermissions([
        'public_profile', 'email'])
    if (isCancelled) {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL })
    }

    const { accessToken } = await AccessToken.getCurrentAccessToken()
    if (accessToken !== null) {

        //Create response callback.
        const responseInfoCallback = (error, result) => {
            if (error) {
                console.log(`Error get info fb_graph: ${error}`)
                dispatch({ type: FACEBOOK_LOGIN_FAIL })
            } else { 
                console.log(`Success get info fb_graph: ${JSON.stringify(result)}`) 
                dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: result })
            }
        }

        // Get info data from fb graph api 
        const infoRequest = new GraphRequest(
            '/me',
            {
                accessToken: accessToken,
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
    console.log(this.email, this.password)
    return async dispatch => {
        startLoginUser(dispatch)
        if (this.email === '') {
            payload.errorEmail = 'Email is required.'
        } else if (!validateEmail(this.email)) {
            payload.errorEmail = 'Email is invalid e-mail address.'
        } else {
            delete payload.errorEmail
        }

        if (this.password === '') {
            payload.errorPassword = 'Password is required.'
        } else {
            delete payload.errorPassword
        }

        if (!isEmpty(payload)) { 
            dispatch({ type: TEXT_INPUT_IS_INVALID, payload })
        } else { 
            // Call service
            dispatch({ type: NORMAL_LOGIN_SUCCESS })
        }
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

    console.log(this.email, this.password, this.rePassword)
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
            dispatch({ type: NORMAL_REGISTER_SUCCESS })
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
