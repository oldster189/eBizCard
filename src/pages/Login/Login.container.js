import { connect } from 'react-redux';
import Login from './Login.component';
import { loginValueChange, normalLogin, facebookLogin } from '../../actions';

const mapStateToProps = ({ auth }) => {
    const { email, password } = auth;
    return { email, password };
};

const mapDispatchToProps = dispatch => {
    return {
        loginValueChange: (prop, value) => {
            dispatch(loginValueChange({ prop, value }));
        },
        normalLogin: (email, password) => {
            dispatch(normalLogin({ email, password }));
        },
        facebookLogin: () => {
            dispatch(facebookLogin());
        }
    };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
