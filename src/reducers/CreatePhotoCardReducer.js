import {
    CREATE_PHOTO_CARD_SELECT_CAMERA_FRONT,
    CREATE_PHOTO_CARD_SELECT_CAMERA_BACK,
    CREATE_PHOTO_CARD_SELECT_LIBRARY_FRONT,
    CREATE_PHOTO_CARD_SELECT_LIBRARY_BACK
} from '../constants/actionTypes';


const initialState = {
    photoCardFront: null,
    photoCardBack: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PHOTO_CARD_SELECT_CAMERA_FRONT:
            return { ...state, photoCardFront: action.payload.photoCardFront }
        case CREATE_PHOTO_CARD_SELECT_LIBRARY_FRONT:
            return { ...state, photoCardFront: action.payload.photoCardFront }
        case CREATE_PHOTO_CARD_SELECT_CAMERA_BACK:
            return { ...state, photoCardBack: action.payload.photoCardBack }
        case CREATE_PHOTO_CARD_SELECT_LIBRARY_BACK:
            return { ...state, photoCardBack: action.payload.photoCardBack }
        default:
            return state
    }
};