import { connect } from 'react-redux';
import RegisterScreen from './Register.component';
import { registerValueChange, normalRegister } from '../../actions';

const mapStateToProps = ({ auth }) => {
    const { email, password, rePassword, error } = auth;
    return { email, password, rePassword, error };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerValueChange: (prop, value) => {
            dispatch(registerValueChange({ prop, value }));
        },
        normalRegister: (email, password, rePassword) => {
            dispatch(normalRegister({ email, password, rePassword }));
        }
    };
};  

const RegisterScreenContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

export default RegisterScreenContainer;
