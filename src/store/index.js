import adsReducer from './reducers';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//const reducer = combineReducers(reducers);
const composeEnhancers = composeWithDevTools;

export function configureStore (config) {
  const store = createStore(adsReducer, config, composeEnhancers());
  return store;
};