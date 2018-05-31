
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import {
  LOGIN,
  LOGOUT,
  NORMAL_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_SUCCESS,
  NORMAL_REGISTER_SUCCESS,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  CREATE_PROFILE_SUCCESS
} from '../constants/actionTypes';

const router = AppNavigator.router;
const mainAction = router.getActionForPathAndParams('Main');
const loginAction = router.getActionForPathAndParams('Login');
const tempNavState = router.getStateForAction(mainAction);
const createPhotoCardAction = router.getActionForPathAndParams('CreatePhotoCard');

const initialNavState = router.getStateForAction(
  loginAction,
  tempNavState
);

export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
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
    case CREATE_PROFILE_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'CreatePhotoCard' }),
        state
      );
      break;
    case LOGIN_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case REGISTER_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Register' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  // console.log(`NextState: ${JSON.stringify(nextState)}`)
  return nextState || state;
};
