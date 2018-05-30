import { connect } from 'react-redux';
import CreateProfileScreen from './CreateProfile.component'
import * as actions from '../../actions/CreateProfileAction';

const mapStateToProps = ({ createProfile }) => {
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
        isShowSecondEmail
    } = createProfile;

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
        isShowSecondEmail
    };
};
const CreateProfileScreenContainer = connect(mapStateToProps, actions)(CreateProfileScreen);

export default CreateProfileScreenContainer;
