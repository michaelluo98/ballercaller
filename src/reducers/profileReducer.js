import * as types from '../actions/actionTypes'; 
import {profileInitialState} from './initialState'; 

export default function profileReducer(state = profileInitialState, action, dispatch) {
	switch(action.type) {
			 
		case types.GET_PROFILE_USER_SUCCESS: 
			const profileUser = action.profileUser; 
			return Object.assign({}, state, { profileUser })

		case types.GET_PROFILE_FRIENDS_SUCCESS: 
			const newFriendsState = {
				profileFriends: action.friends, 
				profileRequests: action.requests
			}
			return Object.assign({}, state, newFriendsState);

		case types.SET_IS_CURRENT_USERS_SUCCESS: 
			const {isCurrentUser} = action;
			return Object.assign({}, state, {isCurrentUser})

		case types.GET_FRIENDSHIP_STATUS_SUCCESS:
			const {friendshipStatus} = action;
			return Object.assign({}, state, {friendshipStatus});

		case types.UPDATE_FRIENDSHIP_STATUS_SUCCESS: 
			const newFriendshipStatus = action.friendshipStatus;
			return Object.assign({}, state, {friendshipStatus: newFriendshipStatus});

		case types.GET_UPCOMING_GAMES_SUCCESS: 
			const newUpcomingStatus = {
				upcomingGames: action.upcomingGames, 
				upcomingCourts: action.upcomingCourts, 
				upcomingCreators: action.upcomingCreators
			}
			return Object.assign({}, state, newUpcomingStatus)

		case types.GET_HISTORY_GAMES_SUCCESS: 
			const newHistoryStatus ={
				historyGames: action.historyGames, 
				historyCourts: action.historyCourts, 
				historyCreators: action.historyCreators
			}
			return Object.assign({}, state, newHistoryStatus)

		default: 
			return state;
	}
}
