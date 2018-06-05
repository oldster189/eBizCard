import { connect } from 'react-redux';
import Login from './Login.component';
import * as actions from '../../actions/AuthAction';

const mapStateToProps = ({ auth }) => {
    const {
        email,
        password,
        errorMessage,
        errorEmail,
        errorPassword,
        loading
    } = auth;
    return {
        email,
        password,
        errorMessage,
        errorEmail,
        errorPassword,
        loading
    };
};

const LoginContainer = connect(mapStateToProps, actions)(Login);

export default LoginContainer;
