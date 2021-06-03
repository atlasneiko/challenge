import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducer';

const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunk, logger) //remove logger for production
  );

export default configureStore;
