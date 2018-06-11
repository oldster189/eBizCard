
import { NativeModules, AsyncStorage } from 'react-native';
import axios from 'axios'; 
import { isEmpty, trimmingAndLowercase } from '../utils/util';
import {
    CREATE_PROFILE_VALUE_CHANGE, 
    CREATE_PROFILE_START,
    TEXT_INPUT_IS_INVALID,
    CREATE_PROFILE_SUCCESS,
    ERROR_NETWORK, 
    CREATE_PROFILE_COMMON_ERROR,
    CREATE_PROFILE_UPLOAD_IMAGE_SUCCESS,
    CREATE_PROFILE_UPLOAD_IMAGE_FAIL
} from '../constants/actionTypes';
import {
    CHOOSE_CAMERA,
    CHOOSE_LIBRARY,
    USER_TOKEN,
    BASE_URL_API,
    NAME_PROFILE_IMAGE,
    PROFILE_DATA
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
        width: 500, //Width of result image when used with cropping option
        height: 500, //Height of result image when used with cropping option
        cropping, //Enable or disable cropping
        freeStyleCropEnabled: true, //Enables user to apply custom rectangle area for cropping
        cropperCircleOverlay: circular, //Enable or disable circular cropping mask.
        compressImageMaxWidth: 500, //Compress image with maximum width
        compressImageMaxHeight: 500, //Compress image with maximum height
        compressImageQuality: 1, //Compress image with quality (from 0 to 1, where 1 is best)
        includeExif: true, //Include image exif data in the response 
    }).then(image => {
        uploadImageToServer(dispatch, image)
            .then(() => {
                dispatch({
                    type: CREATE_PROFILE_UPLOAD_IMAGE_SUCCESS,
                    payload: {
                        uri: image.path,
                        width: image.width,
                        height: image.height,
                        mime: image.mime
                    }
                })
            })
    }).catch(error => {
        // Error common.
        console.log(JSON.stringify(error))
        return dispatch({
            type: CREATE_PROFILE_COMMON_ERROR,
            payload: { errorMessage: error }
        })
    });
}

const chooseCamera = (dispatch, cropping) => {
    ImagePicker.openCamera({
        width: 500, //Width of result image when used with cropping option
        height: 500, //Height of result image when used with cropping option
        cropping, //Enable or disable cropping
        freeStyleCropEnabled: true, //Enables user to apply custom rectangle area for cropping
        compressImageMaxWidth: 500, //Compress image with maximum width
        compressImageMaxHeight: 500, //Compress image with maximum height
        compressImageQuality: 1, //Compress image with quality (from 0 to 1, where 1 is best)
        includeExif: true, //Include image exif data in the response
    }).then(image => {
        uploadImageToServer(dispatch, image)
            .then(() => {
                dispatch({
                    type: CREATE_PROFILE_UPLOAD_IMAGE_SUCCESS,
                    payload: {
                        uri: image.path,
                        width: image.width,
                        height: image.height
                    }
                })
            })
    }).catch(error => {
        // Error common.
        console.log(JSON.stringify(error))
    });
}

const startCreateProfile = (dispatch) => {
    dispatch({ type: CREATE_PROFILE_START });
};

const uploadImageToServer = async (dispatch, image) => {
    try {
        // Create FormData 
        const data = new FormData();
        const pathParts = image.path.split('/');
        data.append('profile_image', {
            uri: image.path,
            type: image.mime,
            name: pathParts[pathParts.length - 1]
        })

        // Get temp name profile
        const deleteImage = await AsyncStorage.getItem(NAME_PROFILE_IMAGE)
        data.append('delete_image', deleteImage)

        const userToken = await AsyncStorage.getItem(USER_TOKEN)
        const config = { headers: { 'x-access-token': userToken } }
        const url = `${BASE_URL_API}/profile/image`
        const response = await axios.post(url, data, config)
        const imageName = response.data.data[0].image

        // Save temp name profile image for delete next upload image profile. 
        await AsyncStorage.setItem(NAME_PROFILE_IMAGE, imageName)

        console.log('Upload image to server successfully!!')
        return response.data.data[0].image
    } catch (error) {
        // Error upload profile image.
        if (error.response.data.message) {
            const message = error.response.data.message
            console.log(`Error upload profile image: ${message}`)
            return dispatch({
                type: CREATE_PROFILE_UPLOAD_IMAGE_FAIL,
                payload: { errorMessage: message }
            })
        }

        // Error common.
        console.log(JSON.stringify(error))
        return dispatch({
            type: CREATE_PROFILE_COMMON_ERROR,
            payload: { errorMessage: error }
        })
    }
}

export const createProfile = ({ 
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
        if (!profileName) {
            payload.errorProfileName = 'Profile name is require.'
        }
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

        // Save profile data to local storage.
        const profileData = JSON.stringify(result)

        await AsyncStorage.setItem(PROFILE_DATA, profileData)
       
        dispatch({
            type: CREATE_PROFILE_SUCCESS,
            payload: result
        })    
    }
}

const doCreateProfile = async (
    dispatch, 
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
        const profileImage = await AsyncStorage.getItem(NAME_PROFILE_IMAGE)
        const config = { headers: { 'x-access-token': userToken } }

        const response = await axios.post(url, {
            profile_image: profileImage,
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

