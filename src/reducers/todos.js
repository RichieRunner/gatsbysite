import * as todoActionTypes from '../actions';

const todos = (state = {}, action) => {
  switch (action.type) {
    case todoActionTypes.ADD_TODO:
      return { ...state, text: action.data };

    default:
      return state;
  }
};
