
import { NativeModules, AsyncStorage } from 'react-native';
import axios from 'axios';
import { isEmpty, trimmingAndLowercase } from '../utils/util';
import {
    CREATE_PROFILE_VALUE_CHANGE,
    CREATE_PROFILE_PHOTO_CAMERA,
    CREATE_PROFILE_PHOTO_LIBRARY,
    CREATE_PROFILE_START,
    TEXT_INPUT_IS_INVALID,
    CREATE_PROFILE_SUCCESS,
    ERROR_NETWORK,
    CREATE_PROFILE_FAIL
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
        const data = new FormData();
        const pathParts = image.path.split('/');
        data.append('profile_image', {
            uri: image.path,
            type: image.mime,
            name: pathParts[pathParts.length - 1]
        })
        const url = `${BASE_URL_API}/profile/image`
        fetch(url, {
            method: 'post',
            headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI1OTIwMDAwMDAsImRhdGEiOnsiaWQiOiI1YjFhNDYxOTgyNTNhZjExMjkyNGI2MDYifSwiaWF0IjoxNTI4NDU1MTg0fQ.kC3VcxJbNcYqoQPeqTBOsXZ-aYVX9zJxptxUDFbTcOA' },
            body: data
        }).then(res => {
            console.log('Upload successfully!')
            console.log(res)
        })
        console.log('Upload successfully!22')
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
        const data = new FormData();
        data.append('profile_image', {
            uri: image.uri,
            type: 'image/jpeg',
            name: 'testPhotoName'
        })
        const url = `${BASE_URL_API}/profile/image`
        fetch(url, {
            method: 'post',
            headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI1OTIwMDAwMDAsImRhdGEiOnsiaWQiOiI1YjFhNDYxOTgyNTNhZjExMjkyNGI2MDYifSwiaWF0IjoxNTI4NDU1MTg0fQ.kC3VcxJbNcYqoQPeqTBOsXZ-aYVX9zJxptxUDFbTcOA' },
            body: data
        }).then(res => {
            console.log('Upload successfully!')
            console.log(res)
        })
        console.log('Upload successfully!22')


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
        const userToken = await AsyncStorage.getItem(USER_TOKEN)
        const config = { headers: { 'Content-Type': 'multipart/form-data;', 'x-access-token': userToken } }
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
    profileImage,
    profileName,
    infoPrefix,
    firstName,
    middleName,
    lastName,
    suffix,
    mobilePhone,
    secondMobilePhone,
    email,
    secondEmail,
    companyName,
    position,
    companyAddress,
    officePhone,
    faxPhone,
    businessType
}) => {
    const payload = {};
    this.email = trimmingAndLowercase(email)

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
            return dispatch({ type: TEXT_INPUT_IS_INVALID, payload })
        }
        // Call service
        const result = await doCreateProfile(dispatch,
            profileImage,
            profileName,
            infoPrefix,
            firstName,
            middleName,
            lastName,
            suffix,
            mobilePhone,
            secondMobilePhone,
            email,
            secondEmail,
            companyName,
            position,
            companyAddress,
            officePhone,
            faxPhone,
            businessType)
        console.log(result)
        dispatch({ type: CREATE_PROFILE_SUCCESS, payload: result })
    }
}

const doCreateProfile = async (
    dispatch,
    profileImage,
    profileName,
    infoPrefix,
    firstName,
    middleName,
    lastName,
    suffix,
    mobilePhone,
    secondMobilePhone,
    email,
    secondEmail,
    companyName,
    position,
    companyAddress,
    officePhone,
    faxPhone,
    businessType
) => {
    try {
        const url = `${BASE_URL_API}/profile`
        const userToken = await AsyncStorage.getItem(USER_TOKEN)
        console.log(userToken)
        const config = { headers: { 'x-access-token': userToken } }

        const response = await axios.post(url, {
            profile_image: 'dummy.jpg',
            profile_name: profileName,
            info_prefix: infoPrefix,
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            suffix,
            mobile_phone: mobilePhone,
            mobile_phone_second: secondMobilePhone,
            email,
            email_second: secondEmail,
            company_name: companyName,
            position,
            company_address: companyAddress,
            company_phone: officePhone,
            company_fax: faxPhone,
            businness_type: businessType
        }, config)
        return response.data.data[0]
    } catch (error) {
        const message = error.response.data.message
        console.log(`Error Create Profile: ${message}`)
        return dispatch({ type: ERROR_NETWORK, payload: { errorMessage: message } })
    }
}

