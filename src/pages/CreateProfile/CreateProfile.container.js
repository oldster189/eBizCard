import { connect } from 'react-redux'
import CreateProfileScreen from './CreateProfile.component'
import * as actions from '../../actions/CreateProfileAction'

const mapStateToProps = ({ createProfile, auth }) => { 
    const {
        infoPrefix, 
        profileImage, 
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
        loading,
        isShowSecondMobilePhone,
        isShowSecondEmail,
        errorMessage,
        errorProfileName,
        errorFirstName,
        errorLastName,
        errorMobilePhone,
        errorCompanyName,
        errorPosition,
        errorCompanyAddress,
    } = createProfile

    const {
        email, 
        link_image,
        userType,
        fbId
    } = auth

    let { firstName, middleName, lastName, profileName } = createProfile 

    firstName = firstName !== '' ? firstName : auth.firstName 
    middleName = middleName !== '' ? middleName : auth.middleName 
    lastName = lastName !== '' ? lastName : auth.lastName 
    profileName = profileName !== '' ? profileName : auth.fullName 
     
    return {
        infoPrefix,
        profileImage,
        profileName,
        fbId,
        firstName,
        middleName,
        lastName,
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
        loading,
        errorMessage,
        isShowSecondMobilePhone,
        isShowSecondEmail,
        errorProfileName,
        errorFirstName,
        errorLastName,
        errorMobilePhone,
        errorCompanyName,
        errorPosition,
        errorCompanyAddress,
    }
}
const CreateProfileScreenContainer = connect(mapStateToProps, actions)(CreateProfileScreen)

export default CreateProfileScreenContainer
