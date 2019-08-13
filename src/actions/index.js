import axios from 'axios';

// Types
export const ADD_TODO = 'ADD_TODO';

// Action Creators
export const getModels = () => {
  return (dispatch, getState) => {
    dispatch(getModelsStarted());
    console.log('getState', getState());
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        dispatch(getModelsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getModelsError(err.message));
      });
  };
};

const getModelsStarted = () => ({
  type: 'GET_MODELS_STARTED',
});

const getModelsSuccess = models => ({
  type: 'GET_MODELS_SUCCESS',
  data: { ...models },
});

const getModelsError = error => ({
  type: 'GET_MODELS_ERROR',
  data: {
    error,
  },
});

export const addTodo = text => ({
  type: 'ADD_TODO',
  data: text,
});
