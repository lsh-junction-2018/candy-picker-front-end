import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import history from './history';

const logger = createLogger();
const historyMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [historyMiddleware, sagaMiddleware, logger];

// we may add more tools later
const enhancer = compose(applyMiddleware(...middlewares));

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);

    sagaMiddleware.run(rootSaga);
    // Enable hot module replacement for reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            // eslint-disable-next-line global-require
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
