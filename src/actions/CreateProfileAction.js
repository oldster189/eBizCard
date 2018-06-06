
import { NativeModules, AsyncStorage } from 'react-native';
import axios from 'axios';
import { isEmpty } from '../utils/util';
import {
    CREATE_PROFILE_VALUE_CHANGE,
    CREATE_PROFILE_PHOTO_CAMERA,
    CREATE_PROFILE_PHOTO_LIBRARY,
    CREATE_PROFILE_START,
    TEXT_INPUT_IS_INVALID,
    CREATE_PROFILE_SUCCESS,
    ERROR_NETWORK
} from '../constants/actionTypes';
import {
    CHOOSE_CAMERA,
    CHOOSE_LIBRARY,
    USER_TOKEN,
    BASE_URL_API
} from '../constants/constants';

const ImagePicker = NativeModules.ImageCropPicker;

export const inputValueChange = ({ prop, value }) => {
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
        uploadImageToServer(dispatch, image)
        // dispatch({
        //     type: CREATE_PROFILE_PHOTO_LIBRARY,
        //     payload: {
        //         profileImage: {
        //             uri: image.path,
        //             width: image.width,
        //             height: image.height,
        //             mime: image.mime
        //         }
        //     }
        // })
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
        uploadImageToServer(dispatch, image)
        dispatch({
            type: CREATE_PROFILE_PHOTO_CAMERA,
            payload: {
                profileImage: {
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

const uploadImageToServer = async (dispatch, image) => {
    try {
        const data = new FormData()
        data.append('profile_image', {
            uri: image.path,
            type: 'image/jpeg',
            name: 'testPhotoName'
        })
        // const userToken = await AsyncStorage.getItem(USER_TOKEN)
        const config = { headers: { 'Content-Type': 'multipart/form-data;', 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI1OTIwMDAwMDAsImRhdGEiOnsiaWQiOiI1YjE2NjcyM2RiNmI5MjUxZjczYTM0NmQifSwiaWF0IjoxNTI4MjU2MDkxfQ.zzbhWTIuFCzhJrHhfPv_jflbIPp16gdrtyWTHe4Q3JE' } }
        const response = await axios.put(`${BASE_URL_API}/profile/image`, data, config)
        console.log(`Response: ${JSON.stringify(response)}`)
    } catch (error) {
        const message = error.response.data.message
        console.log(`Error Upload image: ${error}`);
        return dispatch({
            type: ERROR_NETWORK,
            payload: { errorMessage: message }
        })
    }

}

export const createProfile = ({
    infoPrefix,
    firstName,
    middleName,
    lastName,
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
        if (!firstName) {
            payload.errorFirstName = 'First name is require.'
        }
        if (!lastName) {
            payload.errorLastName = 'Last name is require.'
        }

        if (!mobilePhone) {
            payload.errorMobilePhone = 'Mobile no is require.'
        }

        if (!companyName) {
            payload.errorCompanyName = 'Company is require.'
        }

        if (!position) {
            payload.errorPosition = 'Position is require.'
        }

        if (!companyAddress) {
            payload.errorCompanyAddress = 'Company address is require.'
        }
        if (!isEmpty(payload)) {
            dispatch({ type: TEXT_INPUT_IS_INVALID, payload })
        } else {
            // Call service
            console.log(infoPrefix,
                firstName,
                middleName,
                lastName,
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

