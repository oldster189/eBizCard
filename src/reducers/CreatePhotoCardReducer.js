import {
    CREATE_PHOTO_CARD_SELECT_CAMERA_FRONT,
    CREATE_PHOTO_CARD_SELECT_CAMERA_BACK,
    CREATE_PHOTO_CARD_SELECT_LIBRARY_FRONT,
    CREATE_PHOTO_CARD_SELECT_LIBRARY_BACK
} from '../constants/actionTypes';


const initialState = {
    frontBusinessCard: null,
    backBusinessCard: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PHOTO_CARD_SELECT_CAMERA_FRONT:
            return { ...state, frontBusinessCard: action.payload.frontBusinessCard }
        case CREATE_PHOTO_CARD_SELECT_LIBRARY_FRONT:
            return { ...state, frontBusinessCard: action.payload.frontBusinessCard }
        case CREATE_PHOTO_CARD_SELECT_CAMERA_BACK:
            return { ...state, backBusinessCard: action.payload.backBusinessCard }
        case CREATE_PHOTO_CARD_SELECT_LIBRARY_BACK:
            return { ...state, backBusinessCard: action.payload.backBusinessCard }
        default:
            return state
    }
};
