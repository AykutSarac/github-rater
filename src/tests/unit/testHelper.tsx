import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../slices';
import rootSaga from '../../sagas';

export const renderWithRouter = (ui: ReactNode) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    history,
  };
};
