import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import userLogin from '../components/login/LoginReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  userLogin,
  routing: routerReducer
});

export default rootReducer;
