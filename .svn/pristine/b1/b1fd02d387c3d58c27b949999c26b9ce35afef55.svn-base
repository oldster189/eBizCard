import { connect } from 'react-redux';
import MainScreen from './Main.component';
import * as actions from '../../actions/MainAction';
 
const mapStateToProps = ({ mainProfile }) => {
    const { 
        data 
    } = mainProfile
    return {
        data
    }
}
  
const MainScreenContainer = connect(mapStateToProps, actions)(MainScreen);

export default MainScreenContainer;
