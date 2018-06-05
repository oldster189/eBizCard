import {
    CREATE_PROFILE_VALUE_CHANGE, 
    CREATE_PROFILE_PHOTO_CAMERA, 
    CREATE_PROFILE_PHOTO_LIBRARY, 
    CREATE_PROFILE_START, 
    CREATE_PROFILE_SUCCESS, 
    TEXT_INPUT_IS_INVALID
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
    errorProfileName: '',
    errorFname: '',
    errorLname: '',
    errorMobilePhone: '',
    errorCompanyName: '',
    errorPosition: '',
    errorCompanyAddress: '',
}

export default (state = initialState, action) => {
    // console.log(`Action: ${JSON.stringify(action)} \nState: ${JSON.stringify(state)}`);
    switch (action.type) {
        case CREATE_PROFILE_VALUE_CHANGE:
            return { ...state, [action.payload.prop]: action.payload.value, error: '' };
        case CREATE_PROFILE_PHOTO_CAMERA:
            return { ...state, imageProfile: action.payload.imageProfile }
        case CREATE_PROFILE_PHOTO_LIBRARY:
            return { ...state, imageProfile: action.payload.imageProfile }
        case CREATE_PROFILE_START:
            return { ...state, loading: true, error: '' };
        case CREATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
            };
        case TEXT_INPUT_IS_INVALID:
            return {
                ...state,
                errorProfileName: action.payload.errorProfileName,
                errorFname: action.payload.errorFname,
                errorLname: action.payload.errorLname,
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
