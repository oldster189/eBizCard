import { connect } from 'react-redux';
import MainScreen from './Main.component';
import * as actions from '../../actions/MainAction';

const mapStateToProps = ({ mainProfile }) => {   
    const { 
        info,
        detail,
        profileData,
        errorMessage,
        loading
    } = mainProfile

    return { 
        info,
        detail,
        profileData,
        errorMessage,
        loading
    }
}

const MainScreenContainer = connect(mapStateToProps, actions)(MainScreen);

export default MainScreenContainer;
