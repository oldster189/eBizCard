import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { navigationReduxMiddleware } from '../utils/redux';

const store = createStore(
    reducers,
    {}, 
        applyMiddleware(thunk, navigationReduxMiddleware) 
);

export default store;
