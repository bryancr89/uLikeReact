import * as types from './LoginActionTypes';
import { browserHistory } from 'react-router';

import firebase from '../../services/firebase';

// example of a thunk using the redux-thunk middleware
export function login(userLogin) {
  return function (dispatch) {
    var provider = new firebase
      .auth
      .GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        dispatch({type: types.LOGIN_SUCCESS, user});
        browserHistory.push('/about')
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
}

export function validateLoginForm(userLogin, fieldName, value) {
  return {type: types.VALIDATE_USER_LOGIN_FORM, userLogin, fieldName, value};
}