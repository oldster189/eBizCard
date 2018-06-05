import { connect } from 'react-redux'
import CreateProfileScreen from './CreateProfile.component'
import * as actions from '../../actions/CreateProfileAction'

const mapStateToProps = ({ createProfile, auth }) => { 
    const {
        imageProfile, 
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
        userType,
        fbId
    } = auth

    const { fname, mname, lname, profileName } = createProfile  
   
    const fristName = fname !== '' ? fname : auth.fname 
    const middleName = mname !== '' ? mname : auth.mname 
    const lastName = lname !== '' ? lname : auth.lname 
    const fullname = profileName !== '' ? profileName : auth.fullname 
     
    return {
        imageProfile,
        profileName: fullname,
        infoPrefix,
        fbId,
        fname: fristName,
        mname: middleName,
        lname: lastName,
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
