 import {
    createReactNavigationReduxMiddleware,
    createNavigationPropConstructor,
  } from 'react-navigation-redux-helpers';
  
  const navigationReduxMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  );
  const navigationPropConstructor = createNavigationPropConstructor('root');
  
  export { navigationReduxMiddleware, navigationPropConstructor };
  
