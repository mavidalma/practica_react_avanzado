import adsReducer from './reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

//const reducer = combineReducers(reducers);
const composeEnhancers = composeWithDevTools;

export function configureStore (config) {
  const store = createStore(adsReducer, config, composeEnhancers(applyMiddleware(reduxThunk)));
  return store;
};