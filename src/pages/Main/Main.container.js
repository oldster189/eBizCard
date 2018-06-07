import { connect } from 'react-redux';
import MainScreen from './Main.component';
import * as actions from '../../actions/MainAction';
 
const mapStateToProps = ({ mainProfile }) => {
    const { 
        data,
        errorMessage,
        loading 
    } = mainProfile
    
    return {
        data,
        errorMessage,
        loading 
    }
}
  
const MainScreenContainer = connect(mapStateToProps, actions)(MainScreen);

export default MainScreenContainer;
