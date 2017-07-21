import * as types from './actionTypes'; 


const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = "ec8c6cb96a1e1457440eda7ffc21a046c6b4c1558adfebef1d1a213b9f0b46da";

export function getProfileUserSuccess(profileUser) {
	return { type: types.GET_PROFILE_USER_SUCCESS, profileUser }
}

export function getProfileFriendsSuccess(friends, requests) {
	return { type: types.GET_PROFILE_FRIENDS_SUCCESS, friends, requests}
}

export function setIsCurrentUserSuccess(isCurrentUser) {
	return { type: types.SET_IS_CURRENT_USERS_SUCCESS, isCurrentUser }
}

export function getFriendshipStatusSuccess(friendshipStatus) {
	return { type: types.GET_FRIENDSHIP_STATUS_SUCCESS, friendshipStatus }
}


export function getProfileUser(id) {
	//console.log('id in getProfileUser', id)
  return function (dispatch) {
    const headers = new Headers({
      'Authorization':`Apikey ${API_KEY}`
    })
    fetch(`${BASE_URL}/users/${id}`, {headers})
    .then(res => res.json()).then(res => {
			//console.log('currentUser in getProfileUser', res.user);
      dispatch(getProfileUserSuccess(res.user));
    })
  }
}

export function getProfileFriends(id) {
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/users/${id}/friendships`, {headers}) 
			.then(res => res.json())
			.then(res => {
				//console.log('res friends in getProfileFriends: ', res.friends)
				//console.log('res requests in getProfileFriends: ', res.requests)
				dispatch(getProfileFriendsSuccess(res.friends, res.requests))
			})
	}
}

export function setIsCurrentUser(isCurrentUser) {
	return function (dispatch) {
		dispatch(setIsCurrentUserSuccess(isCurrentUser));
	}
}

export function getFriendshipStatus(currentUserId, profileUserId) {
	return function (dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/users/${currentUserId}/friendships/${profileUserId}/status`
			, {headers}) 
			.then(res => res.json())
			.then(res => {
				dispatch(getFriendshipStatusSuccess(res.friendship_status));
			})
	}
}
