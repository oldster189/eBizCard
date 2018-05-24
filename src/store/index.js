import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { navMiddleware } from '../utils/redux';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk, navMiddleware)
    )
);

export default store;
