import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers';
import mainSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mainSaga);
export default store;
