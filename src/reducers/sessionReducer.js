import * as types from '../actions/actionTypes';
import {sessionInitialState} from './initialState';
import history from '../components/history';
import {push} from 'react-router-redux';

export default function sessionReducer(state = sessionInitialState, action, dispatch) {
	console.log('initialState: ', sessionInitialState);
	console.log('State: ', state);

  switch(action.type) {

    case types.LOG_IN_SUCCESS:
			const currentUser = action.currentUser;
			return Object.assign({}, state, {session: !!sessionStorage.jwt, currentUser});

    case types.LOG_OUT:
			console.log('inlog out');
      return Object.assign({}, state, {session: !!sessionStorage.jwt })

		case types.GET_FAVORITES_SUCCESS: 
			console.log('in GET_FAVORITES_SUCCESS');
			const {favorites} = action; 
			return Object.assign({}, state, {favorites})

		case types.REMOVE_FROM_FAVORITES_SUCCESS: 
			const removedId = action.id
			const newFavorites = state.favorites.filter((player) => {
				return player.id !== removedId
			})
			return Object.assign({}, state, {favorites: newFavorites})

    default:
      return state;
  }
}
