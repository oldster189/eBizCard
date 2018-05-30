import { connect } from 'react-redux'
import CreateProfileScreen from './CreateProfile.component'
import * as actions from '../../actions/CreateProfileAction'

const mapStateToProps = ({ createProfile, auth }) => {
    const {
        imageProfile,
        profileName,
        infoPrefix,
        fname,
        mname,
        lname,
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
        email
    } = auth

    return {
        imageProfile,
        profileName,
        infoPrefix,
        fname,
        mname,
        lname,
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
