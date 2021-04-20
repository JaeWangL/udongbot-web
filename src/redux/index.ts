import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducers, { RootState } from './rootReducers';
import rootSaga from './rootSagas';

const makeStore: MakeStore<RootState> = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<RootState>(makeStore);
