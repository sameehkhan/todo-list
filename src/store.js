import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import listReducer from './reducers/list_reducer';

const configureStore = (preloadedState = {}) => (
    createStore(
        listReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
);

export default configureStore;