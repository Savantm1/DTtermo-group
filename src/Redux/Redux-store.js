import { createStore, combineReducers } from 'redux';
import SpecificationReducer from './SpecificationReducer';
import MainPageReducer from './MainPageReducer';
import NavbarReducer from './NavbarReducer';
import ModelReducer from './ModelReducer';

let reducers = combineReducers({
  
  navbar: NavbarReducer,
  specification: SpecificationReducer,
  MainPage: MainPageReducer,
  fancoilModel: ModelReducer
})

let store = createStore(reducers);


window.store = store;
export default store;