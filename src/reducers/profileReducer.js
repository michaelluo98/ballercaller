import * as types from '../actions/actionTypes'; 
import {profileInitialState} from './initialState'; 

export default function profileReducer(state = profileInitialState, action, dispatch) {
	switch(action.type) {
			 
		case types.GET_PROFILE_USER_SUCCESS: 
			const profileUser = action.profileUser; 
			//console.log('profileUser in profileReducer: ', profileUser)
			return Object.assign({}, state, { profileUser })

		case types.GET_PROFILE_FRIENDS_SUCCESS: 
			//console.log('friends in reducer: ', action.friends) 
			//console.log('requests in reducer: ', action.requests) 
			const newFriendsState = {
				profileFriends: action.friends, 
				profileRequests: action.requests
			}
			return Object.assign({}, state, newFriendsState);

		case types.SET_IS_CURRENT_USERS_SUCCESS: 
			//console.log('isCurrentUser in reducer', action.isCurrentUser)
			const isCurrentUser = action.isCurrentUser;
			return Object.assign({}, state, {isCurrentUser})

		default: 
			return state;
	}
}
