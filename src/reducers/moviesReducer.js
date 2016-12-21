import objectAssign from 'object-assign';

import {LOAD_MOVIES_SUCCESS} from '../constants/ActionTypes';

let initialState = {};

export default function moviesReducer(state = [], action) {
  let newState;

  switch (action.type) {
    case LOAD_MOVIES_SUCCESS:
    return action.movies;

    default:
      return state;
  }
}