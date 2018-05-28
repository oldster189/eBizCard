import { connect } from 'react-redux'; 
import Login from './Login.component';
import * as actions from '../../actions/AuthAction';

const mapStateToProps = ({ auth }) => {
    const { email, password } = auth;
    return { email, password };
}; 

const LoginContainer = connect(mapStateToProps, actions)(Login);

export default LoginContainer;
