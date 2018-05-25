
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import {
  LOGIN,
  LOGOUT,
  NORMAL_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_SUCCESS,
  NORMAL_REGISTER_SUCCESS
} from '../actions/types';

const router = AppNavigator.router;
const mainAction = router.getActionForPathAndParams('Main');
const tempNavState = router.getStateForAction(mainAction);
const loginAction = router.getActionForPathAndParams('Login');
const CreateProfileAction = router.getActionForPathAndParams('CreateProfile');

const initialNavState = router.getStateForAction(
  loginAction,
  tempNavState
);

export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case LOGIN:
      nextState = router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case LOGOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case NORMAL_LOGIN_SUCCESS:
    case FACEBOOK_LOGIN_SUCCESS:
    case NORMAL_REGISTER_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'CreateProfile' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
