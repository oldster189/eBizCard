
import { NativeModules } from 'react-native';
import {
    CREATE_PROFILE_VALUE_CHANGE,
    CHOOSE_CAMERA,
    CHOOSE_LIBRARY,
    SELECT_PHOTO_CAMERA,
    SELECT_PHOTO_LIBRARY,
    CREATE_PROFILE_START,
    TEXT_INPUT_IS_REQUIRE,
    CREATE_PROFILE_SUCCESS
} from '../constants/actionTypes';

const ImagePicker = NativeModules.ImageCropPicker;

export const createProfileValueChange = ({ prop, value }) => {
    return {
        type: CREATE_PROFILE_VALUE_CHANGE,
        payload: { prop, value }
    }
}

export const handleActionSheetPress = (buttonIndex) => {
    return (dispatch) => {
        if (buttonIndex === CHOOSE_CAMERA) {
            chooseCamera(dispatch, true)
        } else if (buttonIndex === CHOOSE_LIBRARY) {
            chooseLibrary(dispatch, true)
        }
    }
}

const chooseLibrary = (dispatch, cropping, circular = false) => {
    ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping,
        freeStyleCropEnabled: true,
        cropperCircleOverlay: circular,
        compressImageMaxWidth: 500,
        compressImageMaxHeight: 500,
        compressImageQuality: 1,
        includeExif: true,
    }).then(image => {
        dispatch({
            type: SELECT_PHOTO_LIBRARY,
            payload: {
                imageProfile: {
                    uri: image.path,
                    width: image.width,
                    height: image.height,
                    mime: image.mime
                }
            }

        })
    }).catch(e => {
        console.log(e);
    });
}

const chooseCamera = (dispatch, cropping) => {
    ImagePicker.openCamera({
        cropping,
        width: 500,
        height: 500,
        freeStyleCropEnabled: true,
        compressImageMaxWidth: 500,
        compressImageMaxHeight: 500,
        compressImageQuality: 1,
        includeExif: true,
    }).then(image => {
        dispatch({
            type: SELECT_PHOTO_CAMERA,
            payload: {
                imageProfile: {
                    uri: image.path,
                    width: image.width,
                    height: image.height
                }
            }
        })
    }).catch(e => {
        console.log(e);
    });
}

const startCreateProfile = (dispatch) => {
    dispatch({ type: CREATE_PROFILE_START });
};

export const createProfile = ({
    infoPrefix,
    fname,
    mname,
    lname,
    suffix,
    mobilePhone,
    email,
    companyName,
    position,
    companyAddress,
    officePhone,
    faxPhone,
    businessType
}) => { 
    this.email = email.replace(/\s+/g, '').toLowerCase();

    return async dispatch => {
        startCreateProfile(dispatch)
        if (fname === '') {
            dispatch({ type: TEXT_INPUT_IS_REQUIRE, payload: { errorFname: 'First name is Require' } })
        } else if (lname === '') {
            dispatch({ type: TEXT_INPUT_IS_REQUIRE, payload: { errorLname: 'Last name is Require' } })
        } else {
            // Call service
            dispatch({ type: CREATE_PROFILE_SUCCESS })
        }
    }
}
