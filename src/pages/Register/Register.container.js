import { connect } from 'react-redux'; 
import Register from './Register.component';
import * as actions from '../../actions/AuthAction';

const mapStateToProps = ({ auth }) => {
    const { email, password, rePassword } = auth;
    return { email, password, rePassword };
}; 


const RegisterScreenContainer = connect(mapStateToProps, actions)(Register);

export default RegisterScreenContainer;
