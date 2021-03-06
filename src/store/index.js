import { createStore } from 'redux';
import notesApp from 'reducers';
// import {composeWithDevTools} from 'redux-devtools-extension'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  notesApp /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
