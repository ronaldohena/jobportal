import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './reducers';

const logger = store => next => action => {
  //console.log(store);

  const returnValue = next(action);

  // console.log('%c action', 'color: #03A9F4', action);
  // console.log('%c Next', 'color: #03A9F4', store.getState());

  return returnValue;
};

const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk, logger));

export default store;
