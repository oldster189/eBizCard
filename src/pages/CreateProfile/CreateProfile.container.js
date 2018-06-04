import { connect } from 'react-redux'
import CreateProfileScreen from './CreateProfile.component'
import * as actions from '../../actions/CreateProfileAction'

const mapStateToProps = ({ createProfile, auth }) => { 
    const {
        imageProfile,
        profileName,
        infoPrefix, 
        suffix,
        mobilePhone,
        secondMobilePhone, 
        secondEmail,
        companyName,
        position,
        companyAddress,
        officePhone,
        faxPhone,
        businessType,
        error,
        loading,
        isShowSecondMobilePhone,
        isShowSecondEmail,
        errorProfileName,
        errorFname,
        errorLname,
        errorMobilePhone,
        errorCompanyName,
        errorPosition,
        errorCompanyAddress,
    } = createProfile
    const {
        email, 
        link_image,
        userType
    } = auth

    let fname = createProfile.fname
    let mname = createProfile.mname
    let lname = createProfile.lname
    if(fname === null || fname === ''){
        fname = auth.fname
    }
    if(mname === null || mname === ''){
        mname = auth.mname
    }
    if(lname === null || lname === ''){
        lname = auth.lname
    }
    

    return {
        imageProfile,
        profileName,
        infoPrefix,
        fname,
        mname,
        lname,
        link_image,
        userType,
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
        businessType,
        error,
        loading,
        isShowSecondMobilePhone,
        isShowSecondEmail,
        errorProfileName,
        errorFname,
        errorLname,
        errorMobilePhone,
        errorCompanyName,
        errorPosition,
        errorCompanyAddress,
    }
}
const CreateProfileScreenContainer = connect(mapStateToProps, actions)(CreateProfileScreen)

export default CreateProfileScreenContainer
