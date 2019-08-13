import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/ReduxWrapper';

const ReduxWrapper = () => {
  return <Provider store={store}></Provider>;
};

export default ReduxWrapper;
