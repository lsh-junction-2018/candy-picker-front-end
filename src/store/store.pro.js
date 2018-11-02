import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import history from './history';

const historyMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(applyMiddleware(historyMiddleware, sagaMiddleware));

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);
    
    sagaMiddleware.run(rootSaga);

    return store;
}
