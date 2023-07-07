import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

import reducers from "./reducers";

const logger = createLogger();

// Middleware setup
const middleware = [
  promiseMiddleware,
  thunk,
  logger
];


// Get compose function from Redux DevTools extension, or fallback to the default compose function
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// Create the Redux store
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

// Save state to local storage whenever the store's state changes
store.subscribe(() => {
  store.getState();
});

export default store;
