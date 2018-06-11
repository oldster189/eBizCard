import { connect } from 'react-redux';
import MainScreen from './Main.component';
import * as actions from '../../actions/MainAction';

const mapStateToProps = ({ mainProfile, auth }) => {   
    const { 
        info,
        detail,
        profileData,
        facebookData,
        errorMessage,
        loading
    } = mainProfile

    const {
        link_image
    } = auth


    return { 
        info,
        detail,
        link_image,
        profileData,
        facebookData,
        errorMessage,
        loading
    }
}

const MainScreenContainer = connect(mapStateToProps, actions)(MainScreen);

export default MainScreenContainer;
