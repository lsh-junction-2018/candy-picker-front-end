import devCreateStore from './store.dev';
import proCreateStore from './store.pro';

let $$store;

const createStore = process.env.NODE_ENV === 'production' ? proCreateStore : devCreateStore;
const setStore = (store) => { $$store = store; };
const getStore = () => { return $$store; };

export { createStore, setStore, getStore };
