import { connect } from 'react-redux';
import CreatePhotoCardScreen from './CreatePhotoCard.component';
import * as actions from '../../actions/CreatePhotoCardAction';

const mapStateToProps = ({ createPhotoCard }) => {
    const {
        photoCardFront,
        photoCardBack,
        loading
    } = createPhotoCard
    return {
        photoCardFront,
        photoCardBack,
        loading
    }
}
 
const CreatePhotoCardScreenContainer = connect(mapStateToProps, actions)(CreatePhotoCardScreen);

export default CreatePhotoCardScreenContainer;
