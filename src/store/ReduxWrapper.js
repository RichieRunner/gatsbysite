import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  { bla: 'foo' },
  composeWithDevTools(applyMiddleware(thunk))
);

export default ({ element }) => <Provider store={store}>{element}</Provider>;
