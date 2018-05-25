import { connect } from 'react-redux';
import WelcomeScreen from './Welcome.component';
 
  
const WelcomeScreenContainer = connect()(WelcomeScreen);

export default WelcomeScreenContainer;
