
import { NativeModules } from 'react-native';
import { validateEmail, isEmpty } from '../utils/util';
import {
    CREATE_PROFILE_VALUE_CHANGE, 
    CREATE_PROFILE_PHOTO_CAMERA,
    CREATE_PROFILE_PHOTO_LIBRARY,
    CREATE_PROFILE_START,
    TEXT_INPUT_IS_INVALID,
    CREATE_PROFILE_SUCCESS
} from '../constants/actionTypes';
import {
    CHOOSE_CAMERA,
    CHOOSE_LIBRARY
} from '../constants/constants';

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
            type: CREATE_PROFILE_PHOTO_LIBRARY,
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
            type: CREATE_PROFILE_PHOTO_CAMERA,
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
    const payload = {};
    this.email = email.replace(/\s+/g, '').toLowerCase();

    return async dispatch => {
        startCreateProfile(dispatch)
        if (fname === '') {
            payload.errorFname = 'First name is require'
        }
        if (lname === '') {
            payload.errorLname = 'Last name is require'
        }

        if (mobilePhone === '') {
            payload.errorMobilePhone = 'Mobile no is require'
        }

        if (companyName === '') {
            payload.errorCompanyName = 'Company is require'
        }

        if (position === '') {
            payload.errorPosition = 'Position is require'
        }

        if (companyAddress === '') {
            payload.errorCompanyAddress = 'Company address is require'
        } 
        console.log(`ValidateEmail: ${validateEmail(email)}`) 
        if (!isEmpty(payload)) {
            dispatch({ type: TEXT_INPUT_IS_INVALID, payload })
        } else {
            // Call service
            console.log(infoPrefix,
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
                businessType)
            dispatch({ type: CREATE_PROFILE_SUCCESS })
        }
    }
}

