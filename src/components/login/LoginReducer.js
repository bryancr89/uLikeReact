import objectAssign from 'object-assign';

import {LOGIN, LOGIN_SUCCESS, VALIDATE_USER_LOGIN_FORM} from './LoginActionTypes';
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

    case LOGIN_SUCCESS:
      newState = objectAssign({}, state);
      
      return newState;

    case VALIDATE_USER_LOGIN_FORM:
      newState = objectAssign({}, state, {
        pristine: false
      });
      newState[action.fieldName] = action.value;
      newState.errors = validator(fieldsToValidate, newState); 
      
      return newState;

    default:
      return state;
  }
}
