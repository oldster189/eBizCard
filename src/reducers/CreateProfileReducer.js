import {
    CREATE_PROFILE_VALUE_CHANGE, SELECT_PHOTO_CAMERA, SELECT_PHOTO_LIBRARY
} from '../constants/actionTypes';

const initialState = {
    imageProfile: null,
    profileName: '',
    infoPrefix: 'Ms.',
    fname: '',
    mname: '',
    lname: '',
    suffix: '',
    mobilePhone: '',
    secondMobilePhone: '',
    email: '',
    secondEmail: '',
    companyName: '',
    position: '',
    companyAddress: '',
    officePhone: '',
    faxPhone: '',
    businessType: '',
    error: '',
    loading: false,
    isShowSecondMobilePhone: false,
    isShowSecondEmail: false,
}

export default (state = initialState, action) => {
    console.log(`Action: ${JSON.stringify(action)} \nState: ${JSON.stringify(state)}`);
    switch (action.type) {
        case CREATE_PROFILE_VALUE_CHANGE:
            return { ...state, [action.payload.prop]: action.payload.value, error: '' };
        case SELECT_PHOTO_CAMERA:
            return { ...state, imageProfile: action.payload }
        case SELECT_PHOTO_LIBRARY:
            return { ...state, imageProfile: action.payload }
        default:
            return state
    }
};
