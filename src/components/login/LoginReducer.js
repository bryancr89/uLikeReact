import objectAssign from 'object-assign';

import {LOGIN, VALIDATE_USER_LOGIN} from './ActionTypes';
import fieldsToValidate from './LoginValidator';
import validator from '../validators';

let initialState = {
  userLogin: {
    username: '',
    password: '',
    pristine: true,
    errors: {}
  }
};

export default function loginReducer(state = initialState.userLogin, action) {
  let newState;

  switch (action.type) {
    case LOGIN:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;

      return newState;

    case VALIDATE_USER_LOGIN:
      newState = objectAssign({}, state, {
        pristine: false
      });
      newState.errors = validator(fieldsToValidate, state); 
      
      return newState;

    default:
      return state;
  }
}
