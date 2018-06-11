import { AsyncStorage } from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk'
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';
import { validateEmail, isEmpty, trimmingAndLowercase } from '../utils/util'

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL,
    LOGIN_VALUE_CHANGE,
    NORMAL_LOGIN_SUCCESS,
    REGISTER_VALUE_CHANGE,
    NORMAL_REGISTER_SUCCESS,
    LOGIN_USER_START,
    REGISTER_START_LOADING,
    LOGIN_SCREEN,
    REGISTER_SCREEN,
    FORGET_PASSWORD_SCREEN,
    TEXT_INPUT_IS_INVALID,
    CREATE_PROFILE_SCREEN,
    CREATE_ACCOUNT_SOCIAL_SUCCESS,
    ERROR_NETWORK,
    REGISTER_COMMON_ERROR,
    LOGIN_COMMON_ERROR,
    CREATE_ACCOUNT_SOCIAL_FAIL,
    NORMAL_LOGIN_FAIL,
    FACEBOOK_LOGIN_COMMON_ERROR,

} from '../constants/actionTypes'
import {
    REGISTER_TYPE_NORMAL,
    BASE_URL_API,
    LOGIN_TYPE_NORMAL,
    USER_TOKEN,
    REGISTER_TYPE_FACEBOOK,
    FACEBOOK_TOKEN,
    FACEBOOK_DATA,
    LOGIN_TYPE_FACEBOOK,
} from '../constants/constants';

const { GraphRequest, GraphRequestManager } = FBSDK

export const facebookLogin = () => dispatch => {
    // Show loading progress.
    loginStartLoading(dispatch)
    doFacebookLogin(dispatch)
}

const loginStartLoading = (dispatch) => {
    dispatch({ type: LOGIN_USER_START })
}

const doFacebookLogin = async dispatch => {
    try {
        const { isCancelled } = await LoginManager.logInWithReadPermissions([
            'public_profile', 'email'])

        if (isCancelled) {
            return dispatch({ type: FACEBOOK_LOGIN_FAIL })
        }
        // Get token facebook.
        const { accessToken } = await AccessToken.getCurrentAccessToken()

        // Save token facebook.
        await AsyncStorage.setItem(FACEBOOK_TOKEN, accessToken)

        if (accessToken !== null) {
            //Create response callback for fb_graph.
            const responseInfoCallback = async (errorGraphRequest, result) => {
                if (errorGraphRequest) {
                    console.log(`Error get info fb_graph: ${errorGraphRequest}`)
                    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
                }

                // Cast data object to string
                const facebookDataRaw = JSON.stringify(result)
                // Save facebook data to local storage.
                await AsyncStorage.setItem(FACEBOOK_DATA, facebookDataRaw)

                // Check status page for change page.
                const statusPageResult = await getStatusForChangePage(dispatch, result.email)

                if (statusPageResult === 'ACCOUNT') {
                    // Register account for social.
                    const response = await registerAccountSocial(dispatch, result.email)

                    // Save user_token to local storage.
                    const userToken = response.token
                    await AsyncStorage.setItem(USER_TOKEN, userToken)

                    console.log('Facebook login successfully!!')

                    // Next to page ProfileScreen.
                    return dispatch({ type: CREATE_ACCOUNT_SOCIAL_SUCCESS, payload: result })
                } else if (statusPageResult === 'PROFILE') {
                    // Save user_token to local storage.
                    const userToken = await loginForSocial(dispatch, result.email)
                    await AsyncStorage.setItem(USER_TOKEN, userToken)

                    // Next to page ProfileScreen.
                    return dispatch({ type: CREATE_ACCOUNT_SOCIAL_SUCCESS, payload: result })
                } else if (statusPageResult === 'HOME') {
                    // Save user_token to local storage.
                    const userToken = await loginForSocial(dispatch, result.email)
                    await AsyncStorage.setItem(USER_TOKEN, userToken)

                    // Next to page HomeScreen. 
                    return dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: result })
                }
            }

            // Get info data from fb graph api.
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
    } catch (error) {
        // Error common.
        console.log(JSON.stringify(error))
        return dispatch({
            type: FACEBOOK_LOGIN_COMMON_ERROR,
            payload: { errorMessage: error }
        })
    }
}

const loginForSocial = async (dispatch, email) => {
    try {
        const url = `${BASE_URL_API}/signin`
        const response = await axios.post(url, {
            email,
            type: LOGIN_TYPE_FACEBOOK
        })
        console.log(`Login for social: ${response.data.token}`)
        return response.data.token
    } catch (error) {
        // Error get status for change page.
        if (error.response.data.message) {
            const message = error.response.data.message
            console.log(`Error login for social: ${message}`);
            return dispatch({
                type: NORMAL_LOGIN_FAIL,
                payload: { errorMessage: message }
            })
        }

        // Error common.
        console.log(JSON.stringify(error))
        return dispatch({
            type: LOGIN_COMMON_ERROR,
            payload: { errorMessage: error }
        })
    }
}

const registerAccountSocial = async (dispatch, email) => {
    try {
        const url = `${BASE_URL_API}/signup`
        const response = await axios.post(url, {
            email,
            type: REGISTER_TYPE_FACEBOOK
        })
        console.log(`Response register account: ${JSON.stringify(response.data)}`)
        return response.data
    } catch (error) {
        // Error register account social.
        if (error.response.data.message) {
            const message = error.response.data.message

            console.log(`Error Register Account Social: ${message}`);
            return dispatch({
                type: CREATE_ACCOUNT_SOCIAL_FAIL,
                payload: { errorMessage: message }
            })
        }

        // Error common.
        console.log(JSON.stringify(error))
        return dispatch({
            type: REGISTER_COMMON_ERROR,
            payload: { errorMessage: error }
        })
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
        loginStartLoading(dispatch)

        //Validate input.
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
            // Show error message.
            return dispatch({ type: TEXT_INPUT_IS_INVALID, payload })
        }

        // Call service.
        try {
            const url = `${BASE_URL_API}/signin`
            const response = await axios.post(url, {
                email: this.email,
                password: this.password,
                type: LOGIN_TYPE_NORMAL
            })

            // Save user_token to local storage.
            const userToken = response.data.token
            await AsyncStorage.setItem(USER_TOKEN, userToken)

            // Check status page for change page.
            const statusPageResult = await getStatusForChangePage(dispatch, email)

            console.log('Login successfully!!')

            if (statusPageResult === 'PROFILE') {
                // Next to page ProfileScreen. 
                dispatch({ type: CREATE_PROFILE_SCREEN })
                dispatch({
                    type: 'Navigation/RESET',
                    actions: [{ type: 'Navigate', routeName: 'CreateProfile' }],
                    index: 0
                })
            } else if (statusPageResult === 'HOME') {
                // Next to page HomeScreen. 
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Home' })],
                });
                dispatch(resetAction)
                // return dispatch({ type: NORMAL_LOGIN_SUCCESS })
            }
        } catch (error) {
            // Error login normal.
            if (error.response.data.message) {
                const message = error.response.data.message
                console.log(`Error login normal: ${message}`);
                return dispatch({
                    type: NORMAL_LOGIN_FAIL,
                    payload: { errorMessage: message }
                })
            }

            // Error common.
            console.log(JSON.stringify(error))
            return dispatch({
                type: LOGIN_COMMON_ERROR,
                payload: { errorMessage: error }
            })
        }
    }
}

const getStatusForChangePage = async (dispatch, email) => {
    try {
        const url = `${BASE_URL_API}/status/profile/${email}`
        const response = await axios.get(url)

        console.log(`Status for change page: ${response.data.data.page}`)
        return response.data.data.page
    } catch (error) {
        // Error get status for change page.
        if (error.response.data.message) {
            const message = error.response.data.message
            console.log(`Error get status for change page: ${message}`);
            return dispatch({
                type: NORMAL_LOGIN_FAIL,
                payload: { errorMessage: message }
            })
        }

        // Error common.
        console.log(JSON.stringify(error))
        return dispatch({
            type: LOGIN_COMMON_ERROR,
            payload: { errorMessage: error }
        })
    }
}

export const registerValueChange = ({ prop, value }) => {
    return {
        type: REGISTER_VALUE_CHANGE,
        payload: { prop, value }
    }
}

export const normalRegister = ({ email, password, rePassword }) => async dispatch => {
    this.email = trimmingAndLowercase(email)
    this.password = trimmingAndLowercase(password)
    this.rePassword = trimmingAndLowercase(rePassword)
    const payload = {}

    // Start loading progress.
    registerStartLoading(dispatch)

    // Validate input.
    if (!this.email) {
        payload.errorEmail = 'Email is required.'
    } else if (!validateEmail(this.email)) {
        payload.errorEmail = 'Email is invalid e-mail address.'
    } else {
        delete payload.errorEmail
    }

    if (!this.password) {
        payload.errorPassword = 'Password is required.'
    } else if (this.password.length < 6) {
        payload.errorPassword = 'Password at least 6 characters.'
    } else {
        delete payload.errorPassword
    }

    if (!this.rePassword) {
        payload.errorRePassword = 'Confirm password is required.'
    } else if (this.password !== this.rePassword) {
        payload.errorRePassword = 'Confirm password not match.'
    } else {
        delete payload.errorRePassword
    }

    if (!isEmpty(payload)) {
        return dispatch({ type: TEXT_INPUT_IS_INVALID, payload })
    }

    // Call service.
    try {
        const response = await axios.post(`${BASE_URL_API}/signup`, {
            email: this.email,
            password: this.password,
            type: REGISTER_TYPE_NORMAL
        })

        // Save user_token to local storage. 
        const userToken = response.data.token
        await AsyncStorage.setItem(USER_TOKEN, userToken)

        console.log('Register successfully!')
        return dispatch({
            type: NORMAL_REGISTER_SUCCESS,
            payload: response.data.token
        })
    } catch (error) {
        // Error register normal.
        if (error.response.data.message) {
            const message = error.response.data.message
            console.log(`Error register normal: ${message}`)
            return dispatch({
                type: ERROR_NETWORK,
                payload: { errorMessage: message }
            })
        }

        // Error common.
        console.log(JSON.stringify(error))
        return dispatch({
            type: REGISTER_COMMON_ERROR,
            payload: { errorMessage: error }
        })
    }
}

const registerStartLoading = (dispatch) => {
    dispatch({ type: REGISTER_START_LOADING })
}

export const forgetPasswordScreen = () => dispatch => {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'ForgetPassword' })],
    });
    dispatch(resetAction)
}

export const loginScreen = () => dispatch => {
    dispatch({ type: LOGIN_SCREEN })
}

export const registerScreen = () => dispatch => {
    dispatch({ type: REGISTER_SCREEN })
}
