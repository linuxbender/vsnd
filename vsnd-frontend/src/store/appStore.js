import {applyMiddleware, compose, createStore} from 'redux'
import {loggerMiddleware} from '../middleware/loggerMiddleware';
import {T_Store} from '../utils/appTypes';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        rootReducer,
        T_Store,
        composeEnhancers(applyMiddleware(...loggerMiddleware))
    );
};

export default configureStore;