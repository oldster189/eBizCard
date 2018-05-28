import {
    CREATE_PROFILE_VALUE_CHANGE
} from '../constants/actionTypes';

const initialState = {
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
        default:
            return state
    }
};
