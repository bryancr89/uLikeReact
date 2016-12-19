import * as types from './ActionTypes';
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDfvqsCRcOlmwnPHH5QDN933DGnsCwmT88",
  authDomain: "ulike-25d9c.firebaseapp.com",
  databaseURL: "https://ulike-25d9c.firebaseio.com",
  storageBucket: "ulike-25d9c.appspot.com",
  messagingSenderId: "392764699487"
};
firebase.initializeApp(config);

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
        debugger;
        dispatch({type: types.LOGIN, user});
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
}

export function validateLogin(userLogin, fieldName, value) {
  return {type: types.VALIDATE_USER_LOGIN, userLogin, fieldName, value};
}