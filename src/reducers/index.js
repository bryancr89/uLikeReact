import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import fuelSavings from './fuelSavingsReducer';
import global from './globalReducer';
import movies from './moviesReducer';
import userLogin from '../components/login/LoginReducer';

const rootReducer = combineReducers({
  fuelSavings,
  global,
  movies,
  userLogin,
  routing: routerReducer
});

export default rootReducer;
