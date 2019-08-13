import { combineReducers } from 'redux';
import todos from './todos';
import models from './models';

const rootReducer = combineReducers({
  todos,
  models,
});

export default rootReducer;
