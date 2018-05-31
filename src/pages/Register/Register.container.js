import { connect } from 'react-redux'; 
import Register from './Register.component';
import * as actions from '../../actions/AuthAction';

const mapStateToProps = ({ auth }) => {
    const { 
        email, 
        password, 
        rePassword,
        errorEmail,
        errorPassword,
        errorRePassword
    } = auth;
    return { 
        email, 
        password, 
        rePassword,
        errorEmail,
        errorPassword,
        errorRePassword 
    };
}; 


const RegisterScreenContainer = connect(mapStateToProps, actions)(Register);

export default RegisterScreenContainer;
