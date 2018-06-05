import {
    CREATE_PROFILE_VALUE_CHANGE, 
    CREATE_PROFILE_PHOTO_CAMERA, 
    CREATE_PROFILE_PHOTO_LIBRARY, 
    CREATE_PROFILE_START, 
    CREATE_PROFILE_SUCCESS, 
    TEXT_INPUT_IS_INVALID
} from '../constants/actionTypes';

const initialState = { 
    infoPrefix: 'Ms.',
    profileImage: null,
    profileName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    mobilePhone: '',
    secondMobilePhone: '', 
    secondEmail: '',
    companyName: '',
    position: '',
    companyAddress: '',
    officePhone: '',
    faxPhone: '',
    businessType: '',
    errorMessage: '',
    loading: false,
    isShowSecondMobilePhone: false,
    isShowSecondEmail: false,
    errorProfileName: '',
    errorFirstName: '',
    errorLastName: '',
    errorMobilePhone: '',
    errorCompanyName: '',
    errorPosition: '',
    errorCompanyAddress: '',
}

export default (state = initialState, action) => {
    // console.log(`Action: ${JSON.stringify(action)} \nState: ${JSON.stringify(state)}`);
    switch (action.type) {
        case CREATE_PROFILE_VALUE_CHANGE:
            return { ...state, [action.payload.prop]: action.payload.value, errorMessage: '' };
        case CREATE_PROFILE_PHOTO_CAMERA:
            return { ...state, profileImage: action.payload.profileImage }
        case CREATE_PROFILE_PHOTO_LIBRARY:
            return { ...state, profileImage: action.payload.profileImage }
        case CREATE_PROFILE_START:
            return { ...state, loading: true, errorMessage: '' };
        case CREATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessage: '',
            };
        case TEXT_INPUT_IS_INVALID:
            return {
                ...state,
                errorProfileName: action.payload.errorProfileName,
                errorFirstName: action.payload.errorFirstName,
                errorLastName: action.payload.errorLastName,
                errorMobilePhone: action.payload.errorMobilePhone,
                errorCompanyName: action.payload.errorCompanyName,
                errorPosition: action.payload.errorPosition,
                errorCompanyAddress: action.payload.errorCompanyAddress,
                loading: false,
            }
        default:
            return state
    }
};
