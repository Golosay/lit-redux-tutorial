import { createStore, combineReducers } from 'redux';

import { reducer } from './reducers.js';

export function initStore() {
  return createStore(
    combineReducers({ reducer }),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__?.()
  );
}
