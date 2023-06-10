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

// Save state to local storage
function saveStateToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
}

// Load state from local storage
function loadStateFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from local storage:", error);
    return undefined;
  }
}

// Get compose function from Redux DevTools extension, or fallback to the default compose function
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Load persisted state from local storage
const persistedState = loadStateFromLocalStorage();

// Create the Redux store
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(...middleware))
);

// Save state to local storage whenever the store's state changes
store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
