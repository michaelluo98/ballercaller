import * as types from '../actions/actionTypes';
import {sessionInitialState} from './initialState';

export default function sessionReducer(state = sessionInitialState, action, dispatch) {
  switch(action.type) {

    case types.LOG_IN_SUCCESS:
			const currentUser = action.currentUser;
      console.log('sessionStorage.currentUserId', sessionStorage.currentUserId);
      const loggedInState = {
        session: !!sessionStorage.jwt,
        currentUser,
        currentUserId: sessionStorage.currentUserId
      }
			return Object.assign({}, state, loggedInState);

    case types.LOG_OUT:
      const loggedOutState = {
        session: !!sessionStorage.jwt,
        currentUser: {},
        currentUserId: 0
      }
      return Object.assign({}, state, loggedOutState)

		case types.SIGN_UP_USER_SUCCESS: 
			const signedUpUserState = {
				currentUser: action.newUser
			}
			return Object.assign({}, state, signedUpUserState)

    case types.GET_CURRENT_USER_SUCCESS:
			//console.log('user in GET_CURRENT_USER_SUCCESS', action.user);
      return Object.assign({}, state, {currentUser: action.user});

		case types.GET_FAVORITES_SUCCESS:
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
