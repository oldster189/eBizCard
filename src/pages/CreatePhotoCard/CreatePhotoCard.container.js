import { connect } from 'react-redux';
import CreatePhotoCardScreen from './CreatePhotoCard.component';
import * as actions from '../../actions/CreatePhotoCardAction';

const mapStateToProps = ({ createPhotoCard, createProfile }) => {
    const {
        frontBusinessCard,
        backBusinessCard,
        errorMessage,
        loading
    } = createPhotoCard
    const {
        profileData
    } = createProfile
    return {
        profileData,
        frontBusinessCard,
        backBusinessCard,
        errorMessage,
        loading
    }
}

const CreatePhotoCardScreenContainer = connect(
    mapStateToProps,
    actions
)(CreatePhotoCardScreen);

export default CreatePhotoCardScreenContainer;
