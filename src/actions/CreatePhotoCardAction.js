import { NativeModules } from 'react-native'
import {
    CREATE_PHOTO_CARD_SELECT_CAMERA_FRONT,
    CREATE_PHOTO_CARD_SELECT_CAMERA_BACK,
    CREATE_PHOTO_CARD_SELECT_LIBRARY_FRONT,
    CREATE_PHOTO_CARD_SELECT_LIBRARY_BACK,
    MAIN_SCREEN
} from '../constants/actionTypes'
import {
    CHOOSE_CAMERA,
    CHOOSE_LIBRARY,
    TYPE_SELECT_CARD_FRONT,
    TYPE_SELECT_CARD_BACK
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
    }).then(image => {
        const payload = {}
        if (typeSelect === TYPE_SELECT_CARD_FRONT) {
            payload.photoCardFront = {
                uri: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime
            }
        } else {
            payload.photoCardBack = {
                uri: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime
            }
        }
        dispatch({
            type: (typeSelect === TYPE_SELECT_CARD_FRONT) ? 
                CREATE_PHOTO_CARD_SELECT_LIBRARY_FRONT : CREATE_PHOTO_CARD_SELECT_LIBRARY_BACK,
            payload
        })
    }).catch(e => {
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
        const payload = {}
        if (typeSelect === TYPE_SELECT_CARD_FRONT) {
            payload.photoCardFront = { uri: image.path, width: image.width, height: image.height }
        } else {
            payload.photoCardBack = { uri: image.path, width: image.width, height: image.height }
        }
        dispatch({
            type: (typeSelect === TYPE_SELECT_CARD_FRONT) ? 
            CREATE_PHOTO_CARD_SELECT_CAMERA_FRONT : CREATE_PHOTO_CARD_SELECT_CAMERA_BACK,
            payload
        })
    }).catch(e => {
        console.log(e)
    })
}

export const mainScreen = () => dispatch => {
    dispatch({ type: MAIN_SCREEN })
} 
