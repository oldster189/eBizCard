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
        errorRePassword,
        loading
    } = auth;
    return { 
        email, 
        password, 
        rePassword,
        errorEmail,
        errorPassword,
        errorRePassword,
        loading
    };
}; 


const RegisterScreenContainer = connect(mapStateToProps, actions)(Register);

export default RegisterScreenContainer;
