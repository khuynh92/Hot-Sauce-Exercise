import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {hotSauceState} from './ducks/hotSauce.js';
const appReducer = combineReducers({
  hotSauceState,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancers());

