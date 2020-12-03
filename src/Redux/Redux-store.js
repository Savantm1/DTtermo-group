import { createStore, combineReducers } from 'redux';
import SpecificationReducer from '../components/Specification/SpecificationReducer';
import NavbarReducer from './NavbarReducer';

let reducers = combineReducers({
  
  navbar: NavbarReducer,
  specification: SpecificationReducer
})

let store = createStore(reducers);


window.store = store;
export default store;