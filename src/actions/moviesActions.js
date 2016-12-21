import _ from 'lodash';

import * as types from '../constants/actionTypes';
import firebase from '../services/firebase';


export function getMovies() {
  return function (dispatch) {
    let movies = firebase.database().ref('/movies');
    return movies
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val());
        return dispatch({
          type: types.LOAD_MOVIES_SUCCESS,
          movies: _.values(snapshot.val())
        });
      });
  };
}

export function initializeMovies() {
  return (dispatch) => {
    return dispatch(getMovies());
  };
}
