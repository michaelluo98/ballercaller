import * as types from '../actions/actionTypes';
import {sessionInitialState} from './initialState';

export default function sessionReducer(state = sessionInitialState, action, dispatch) {
  switch (action.type) {

    case types.LOG_IN_SUCCESS:
			const currentUser = action.currentUser;
			//console.log('sessionStorage.currentUserId', sessionStorage.currentUserId);
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
			//return Object.assign({}, state, loggedOutState)
			return Object.assign({}, sessionInitialState, loggedOutState);

		case types.SIGN_UP_USER_SUCCESS: 
			const signedUpUserState = {
				session: !!sessionStorage.jwt,
				currentUser: action.newUser, 
				currentUserId: sessionStorage.currentUserId
			}
			return Object.assign({}, state, signedUpUserState)

		case types.GET_USER_FRIENDS_SUCCESS: 
			//console.log('friends in reducer: ', action.friends) 
			//console.log('requests in reducer: ', action.requests) 
			const newFriendsState = {
				friends: action.friends, 
				requests: action.requests
			}
			return Object.assign({}, state, newFriendsState)

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

		case types.LOAD_ALL_MESSAGES_SUCCESS: 
			const messageHistory = action.messages;
			console.log('messageHistory object in loadAllMessagesReducer: ', messageHistory);
			return Object.assign({}, state, {messageHistory});

		case types.OPEN_CHAT_SUCCESS: 
			const {openChats, friends} = action;
			return Object.assign({}, state, {openChats, friends});

		case types.CLOSE_CHAT_SUCCESS: 
			const newClosedOpenChats = action.openChats; 
			return Object.assign({}, state, {openChats: newClosedOpenChats});

		case types.TOGGLE_CHAT_SUCCESS: 
			const newToggledFriends = action.friends;
			return Object.assign({}, state, {friends: newToggledFriends});

		case types.ADD_MESSAGE_SUCCESS: 
			const {newMessageHistory, newUsers, newOpenChats} = action;
			return Object.assign({}, state, {messageHistory: newMessageHistory, 
																			 friends: newUsers, 
																			 openChats: newOpenChats});

		case types.ADD_USER_SUCCESS: 
			const usersWithAdded = action.newUsers; 
			return Object.assign({}, state, {friends: usersWithAdded});

		case types.SET_USER_OFFLINE_SUCCESS: 
			const usersWithOffline = action.newUsers;
			return Object.assign({}, state, {friends: usersWithOffline});

    default:
      return state;
  }
}
