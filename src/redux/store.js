import { counterReducer } from './reducer';
import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// const enhancer = devToolsEnhancer();
export const storeM = createStore(counterReducer);
