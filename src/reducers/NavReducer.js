
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import { LOGIN, LOGOUT } from '../actions/types';

const router = AppNavigator.router;
const mainAction = router.getActionForPathAndParams('Main');
const tempNavState = router.getStateForAction(mainAction);
const loginAction = router.getActionForPathAndParams('Login');

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
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      );
      break;
    default:
    
    console.log(`Action: ${JSON.stringify(action)} ${JSON.stringify(state)}`); 
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
