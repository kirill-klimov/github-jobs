import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

let store = createStore(rootReducer, applyMiddleware(...middleware));
let persistor = persistStore(store);

export {store, persistor};