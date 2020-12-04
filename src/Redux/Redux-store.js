import { createStore, combineReducers } from 'redux';
import SpecificationReducer from '../components/Specification/SpecificationReducer';
import MainPageReducer from './MainPageReducer';
import NavbarReducer from './NavbarReducer';

let reducers = combineReducers({
  
  navbar: NavbarReducer,
  specification: SpecificationReducer,
  MainPage: MainPageReducer
})

let store = createStore(reducers);


window.store = store;
export default store;