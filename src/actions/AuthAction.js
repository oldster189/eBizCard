import { AsyncStorage } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

export const facebookLogin = () => async dispatch => {
    const token = await AsyncStorage.getItem('fb_token');
    if (token) {
        // Dispatch an action saying FB login is done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
        // Start up FB Login process
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

