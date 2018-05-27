import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL,
    LOGIN_VALUE_CHANGE,
    NORMAL_LOGIN_SUCCESS,
    REGISTER_VALUE_CHANGE,
    NORMAL_REGISTER_SUCCESS,
    NORMAL_REGISTER_NOT_MATCH_PASSWORD,
    LOGIN_USER_START,
    REGISTER_USER_START
} from '../constants/actionTypes';

const startLoginUser = (dispatch) => {
    dispatch({ type: LOGIN_USER_START });
};

export const facebookLogin = () => async dispatch => { 
    const token = await AsyncStorage.getItem('fb_token');
    console.log(token);
    if (token) {
        // Dispatch an action saying FB login is done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
        // Start up FB Login process 
        startLoginUser(dispatch);
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {  
   
    const { isCancelled } = await LoginManager.logInWithReadPermissions([
        'public_profile', 'email']);
    if (isCancelled) {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    const { accessToken } = await AccessToken.getCurrentAccessToken();
    await AsyncStorage.setItem('fb_token', accessToken);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: accessToken });
};

export const loginValueChange = ({ prop, value }) => {
    return {
        type: LOGIN_VALUE_CHANGE,
        payload: { prop, value }
    };
};


export const normalLogin = ({ email, password }) => {
    console.log(email, password);
    return {
        type: NORMAL_LOGIN_SUCCESS
    };
};

const startRegisterUser = (dispatch) => {
    dispatch({ type: REGISTER_USER_START });
};

export const registerValueChange = ({ prop, value }) => {
    return {
        type: REGISTER_VALUE_CHANGE,
        payload: { prop, value }
    };
};

export const normalRegister = ({ email, password, rePassword }) => {
    this.email = email.replace(/\s+/g, '').toLowerCase();
    this.password = password.replace(/\s+/g, '').toLowerCase();
    this.rePassword = rePassword.replace(/\s+/g, '').toLowerCase();

    return async dispatch => {
        startRegisterUser(dispatch);
        if (this.password !== this.rePassword) {
            dispatch({ type: NORMAL_REGISTER_NOT_MATCH_PASSWORD });  
        } else {
            // Call service
            dispatch({ type: NORMAL_REGISTER_SUCCESS });  
        } 
    }; 
};

export const forgetPasswordScreen = () => dispatch => dispatch(NavigationActions.navigate({ routeName: 'ForgetPassword' }))


export const loginScreen = () => {
    return dispatch =>{
        dispatch({ type: LOGIN_SCREEN })  
    };
};

export const registerScreen = () => {
    return dispatch =>{
        dispatch({ type: REGISTER_SCREEN })  
    };
};
