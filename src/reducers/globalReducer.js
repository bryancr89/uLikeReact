import objectAssign from 'object-assign';

import {LOGIN_USER_SUCCESS} from '../constants/ActionTypes';

let initialState = {};

export default function globalReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case LOGIN_USER_SUCCESS: 


    default:
      return state;
  }
}