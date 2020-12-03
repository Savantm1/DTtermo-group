import { createStore, combineReducers } from 'redux';
import NavbarReducer from './NavbarReducer';

let reducers = combineReducers({
  
  navbar: NavbarReducer
  
})

let store = createStore(reducers);


window.store = store;
export default store;