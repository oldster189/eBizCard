import { connect } from 'react-redux';
import CreatePhotoCardScreen from './CreatePhotoCard.component';
import * as actions from '../../actions/CreatePhotoCardAction';

const mapStateToProps = ({ createPhotoCard }) => {
    const {
        frontBusinessCard,
        backBusinessCard,
        loading
    } = createPhotoCard
    return {
        frontBusinessCard,
        backBusinessCard,
        loading
    }
}
 
const CreatePhotoCardScreenContainer = connect(
    mapStateToProps, 
    actions
)(CreatePhotoCardScreen);

export default CreatePhotoCardScreenContainer;
