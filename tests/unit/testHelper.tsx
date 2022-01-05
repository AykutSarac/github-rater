import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../src/slices';
import rootSaga from '../../src/sagas';

export const renderWithRouter = (ui: ReactNode) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // eslint-disable-next-line no-restricted-globals
    history,
  };
};
