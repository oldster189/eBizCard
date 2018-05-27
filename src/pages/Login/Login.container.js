import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Login from './Login.component';
import * as actions from '../../actions';

const mapStateToProps = ({ auth }) => {
    const { email, password } = auth;
    return { email, password };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         loginValueChange: (prop, value) => {
//             dispatch(loginValueChange({ prop, value }));
//         },
//         normalLogin: (email, password) => {
//             dispatch(normalLogin({ email, password }));
//         },
//         facebookLogin: () => {
//             dispatch(facebookLogin());
//         },
//         registerScreen: () => {
//             dispatch(registerScreen)
//         },
//         forgetPasswordScreen: () => {
//             dispatch(NavigationActions.navigate({ routeName: 'ForgetPassword' }))
//         }
//     };
// };

const LoginContainer = connect(mapStateToProps, actions)(Login);

export default LoginContainer;
