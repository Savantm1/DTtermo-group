import { createStore, combineReducers, applyMiddleware } from 'redux';
import SpecificationReducer from './SpecificationReducer';
import MainPageReducer from './MainPageReducer';
import NavbarReducer from './NavbarReducer';
import ModelReducer from './ModelReducer';
import AccessoriesModelReducer from "./AccessoriesModelReducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
  
  navbar: NavbarReducer,
  specification: SpecificationReducer,
  MainPage: MainPageReducer,
  fancoilModel: ModelReducer,
  accessoriesModel: AccessoriesModelReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;