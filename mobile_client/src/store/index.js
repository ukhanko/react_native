import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from './rootReducer';


const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer(), composeEnhancers(applyMiddleware(createLogger())));
};

export const store = configureStore();
