import axios from 'axios';
import { bindActionCreators } from 'redux';

const initialState = {
  userData: {},
  isFetching: false,
  isError: false,
};

export default function models(state = initialState, action) {
  switch (action.type) {
    case 'GET_MODELS_STARTED':
      return {
        ...state,
        isFetching: true,
      };
    case 'GET_MODELS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isError: false,
        models: state.data,
      };
    case 'GET_MODELS_ERROR':
      return {
        ...state,
        isFetch: false,
        error: action.data.error,
      };
    default:
      return state;
  }
}
