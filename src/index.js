import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root/Root';
import { createStore, setStore } from './store';
import history from './store/history';
import * as serviceWorker from './serviceWorker';

import 'typeface-roboto';
import './index.css';

const store = createStore();

setStore(store);

ReactDOM.render(<Root store={store} history={history} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
