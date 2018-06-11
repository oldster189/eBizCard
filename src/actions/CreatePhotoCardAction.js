import { NativeModules, AsyncStorage } from 'react-native'
import axios from 'axios';
import {
    CREATE_PHOTO_CARD_SELECT_CAMERA_FRONT,
    CREATE_PHOTO_CARD_SELECT_CAMERA_BACK,
    CREATE_PHOTO_CARD_SELECT_LIBRARY_FRONT,
    CREATE_PHOTO_CARD_SELECT_LIBRARY_BACK,
    MAIN_SCREEN,
    CREATE_PHOTO_CARD_COMMON_ERROR,
    CREATE_PHOTO_CARD_UPLOAD_IMAGE_FAIL
} from '../constants/actionTypes'
import {
    CHOOSE_CAMERA,
    CHOOSE_LIBRARY,
    TYPE_SELECT_CARD_FRONT,
    TYPE_SELECT_CARD_BACK,
    USER_TOKEN,
    BASE_URL_API,
    PROFILE_DATA
} from '../constants/constants'

const ImagePicker = NativeModules.ImageCropPicker

export const handleActionSheetPressFront = (buttonIndex) => {
    return (dispatch) => {
        if (buttonIndex === CHOOSE_CAMERA) {
            chooseCamera(dispatch, true, TYPE_SELECT_CARD_FRONT)
        } else if (buttonIndex === CHOOSE_LIBRARY) {
            chooseLibrary(dispatch, true, TYPE_SELECT_CARD_FRONT)
        }
    }
}

export const handleActionSheetPressBack = (buttonIndex) => {
    return (dispatch) => {
        if (buttonIndex === CHOOSE_CAMERA) {
            chooseCamera(dispatch, true, TYPE_SELECT_CARD_BACK)
        } else if (buttonIndex === CHOOSE_LIBRARY) {
            chooseLibrary(dispatch, true, TYPE_SELECT_CARD_BACK)
        }
    }
}

const chooseLibrary = (dispatch, cropping, typeSelect) => {
    ImagePicker.openPicker({
        width: 900,
        height: 540,
        cropping,
        freeStyleCropEnabled: true,
        compressImageMaxWidth: 900,
        compressImageMaxHeight: 540,
        compressImageQuality: 1,
        includeExif: true,
    })
        .then(image => {
            uploadImageToServer(dispatch, image, typeSelect)
                .then(() => {
                    const payload = {}
                    if (typeSelect === TYPE_SELECT_CARD_FRONT) {
                        payload.frontBusinessCard = {
                            uri: image.path,
                            width: image.width,
                            height: image.height,
                            mime: image.mime
                        }
                    } else {
                        payload.backBusinessCard = {
                            uri: image.path,
                            width: image.width,
                            height: image.height,
                            mime: image.mime
                        }
                    }
                    dispatch({
                        type: (typeSelect === TYPE_SELECT_CARD_FRONT)
                            ? CREATE_PHOTO_CARD_SELECT_LIBRARY_FRONT
                            : CREATE_PHOTO_CARD_SELECT_LIBRARY_BACK,
                        payload
                    })
                })
        })
        .catch(e => {
            console.log(e)
        })
}

const chooseCamera = (dispatch, cropping, typeSelect) => {
    ImagePicker.openCamera({
        cropping,
        width: 900,
        height: 540,
        freeStyleCropEnabled: true,
        compressImageMaxWidth: 900,
        compressImageMaxHeight: 540,
        compressImageQuality: 1,
        includeExif: true,
    }).then(image => {
        uploadImageToServer(dispatch, image, typeSelect)
            .then(() => {
                const payload = {}
                if (typeSelect === TYPE_SELECT_CARD_FRONT) {
                    payload.frontBusinessCard = {
                        uri: image.path,
                        width: image.width,
                        height: image.height
                    }
                } else {
                    payload.backBusinessCard = {
                        uri: image.path,
                        width: image.width,
                        height: image.height
                    }
                }
                dispatch({
                    type: (typeSelect === TYPE_SELECT_CARD_FRONT)
                        ? CREATE_PHOTO_CARD_SELECT_CAMERA_FRONT
                        : CREATE_PHOTO_CARD_SELECT_CAMERA_BACK,
                    payload
                })
            })
    }).catch(error => {
        // Error common.
        console.log(JSON.stringify(error))
    })
}

const uploadImageToServer = async (dispatch, image, type) => {
    try {
        // Create FormData 
        const data = new FormData();
        const pathParts = image.path.split('/');
        data.append(
            'type',
            (type === TYPE_SELECT_CARD_FRONT)
                ? 'card_front'
                : 'card_back')
        data.append('card_image', {
            uri: image.path,
            type: image.mime,
            name: pathParts[pathParts.length - 1]
        })
        const profileDataRaw = await AsyncStorage.getItem(PROFILE_DATA)
        const profileData = JSON.parse(profileDataRaw)
        console.log(`profileData.info._id: ${profileData.info._id}`)
        const profileId = profileData.info._id
        data.append('_id', profileId)


        const userToken = await AsyncStorage.getItem(USER_TOKEN)
        const config = { headers: { 'x-access-token': userToken } }
        const url = `${BASE_URL_API}/update/card`
        const response = await axios.put(url, data, config)

        console.log('Upload image to server successfully!!')
        return response.data.data[0].image
    } catch (error) {
        // Error upload profile image.
        if (error.response.data.message) {
            const message = error.response.data.message
            console.log(`Error upload profile image: ${message}`)
            return dispatch({
                type: CREATE_PHOTO_CARD_UPLOAD_IMAGE_FAIL,
                payload: { errorMessage: message }
            })
        }

        // Error common.
        console.log(JSON.stringify(error))
        return dispatch({
            type: CREATE_PHOTO_CARD_COMMON_ERROR,
            payload: { errorMessage: error }
        })
    }
}

export const confirmSkipPage = () => {

}


export const mainScreen = () => dispatch => {
    dispatch({ type: MAIN_SCREEN })
} 
