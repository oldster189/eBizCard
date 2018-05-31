import { connect } from 'react-redux';
import Login from './Login.component';
import * as actions from '../../actions/AuthAction';

const mapStateToProps = ({ auth }) => {
    const {
        email,
        password,
        errorEmail,
        errorPassword
    } = auth;
    return {
        email,
        password,
        errorEmail,
        errorPassword
    };
};

const LoginContainer = connect(mapStateToProps, actions)(Login);

export default LoginContainer;
