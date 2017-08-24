import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
// import history from '../components/history';
//import {PropTypes} from 'prop-types';
//import { push } from 'react-router-redux';

const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = "ec8c6cb96a1e1457440eda7ffc21a046c6b4c1558adfebef1d1a213b9f0b46da";

export function loginSuccess(currentUser) {
  return {type: types.LOG_IN_SUCCESS, currentUser}
}

export function getFavoritesSuccess(favorites) {
	return {type: types.GET_FAVORITES_SUCCESS, favorites}
}

export function removeFromFavoritesSuccess(id) {
	return {type: types.REMOVE_FROM_FAVORITES_SUCCESS, id}
}

export function getCurrentUserSuccess(user) {
  return {type: types.GET_CURRENT_USER_SUCCESS, user}
}

export function signUpUserSuccess(newUser) {
	return {type: types.SIGN_UP_USER_SUCCESS, newUser}
}

export function getUserFriendsSuccess(friends) {
	return {type: types.GET_USER_FRIENDS_SUCCESS, friends}
}

export function loadAllMessagesSuccess(messages) {
	return {type: types.LOAD_ALL_MESSAGES_SUCCESS, messages}
}

export function openChatSuccess(openChats, friends) {
	return {type: types.OPEN_CHAT_SUCCESS, openChats, friends}
}

export function closeChatSuccess(openChats) {
	return {type: types.CLOSE_CHAT_SUCCESS, openChats} 
}

export function toggleChatSuccess(friends) {
	return {type: types.TOGGLE_CHAT_SUCCESS, friends};
}


function addCurrentUser(dispatch, credentials) {
  fetch(`${BASE_URL}/users/${credentials.email}`)
    .then(res => res.json()).then(res => {
      sessionStorage.setItem('currentUserId', res.user.id);
      dispatch(loginSuccess(res.user));
    })
}

export function removeFromFavorites(player) {
	return function(dispatch) {
		dispatch(removeFromFavoritesSuccess(player.id));
	}
}


export function getFavorites(id) {
	// console.log('id in getFavorites: ', id)
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/users/${id}/favorites`, {headers})
			.then(res => res.json()).then(res => {
				// console.log('favorites in getFavorites: ', res.favorites)
				dispatch(getFavoritesSuccess(res.favorites));
			})
	}
}

export function signUpUser(user) {
	return async (dispatch) => {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`, 
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		const newUser = await fetch(`${BASE_URL}/users`, {
			headers,
			method: 'POST',
			body: JSON.stringify({user})
		})
		const returnedUser = await newUser.json().then(res => res.user);
    sessionStorage.setItem('jwt', true);
		sessionStorage.setItem('currentUserId', returnedUser.id)
		dispatch(signUpUserSuccess(returnedUser));
	}
}

export function getCurrentUser(id) {
	//console.log('id in getCurrentUser', id)
  return function (dispatch) {
    const headers = new Headers({
      'Authorization':`Apikey ${API_KEY}`
    })
    fetch(`${BASE_URL}/users/${id}`, {headers})
    .then(res => res.json()).then(res => {
			//console.log('currentUser in getCurrentUser', res.user);
      dispatch(getCurrentUserSuccess(res.user));
    })
  }
}


export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
			//console.log('response jwt', response.jwt);
      if (response.jwt === undefined) {
        // history.push('/');
        // dispatch(push('/game'));
      }
      else {
				//console.log('setting jwt token');
        sessionStorage.setItem('jwt', response.jwt);
        // dispatch(push('/'));
        addCurrentUser(dispatch, credentials);
        // dispatch(loginSuccess(credentials));
      }
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  sessionStorage.removeItem('currentUserId')
  return {type: types.LOG_OUT}
}


export function getUserFriends(currentUserId) {
  return function (dispatch) {
    const headers = new Headers({
      'Authorization':`Apikey ${API_KEY}`
    })
		fetch(`${BASE_URL}/users/${currentUserId}/friends`, {headers})
    .then(res => res.json()).then(res => {
			console.log('currentUserFriends: ', res);
      dispatch(getUserFriendsSuccess(res.friends));
    })
  }
}

export function loadAllMessages(currentUserId) {
	return function (dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/friendships/${currentUserId}/directmessages`, {headers})
			.then(res => res.json())
			.then(res => {
				console.log('messages in loadAllMessages: ', res.messages); 
				dispatch(loadAllMessagesSuccess(res.messages));
			})
	}
}

// getUser(str, arr) gets a user from the arr of users by userId str
// returns user object or null
function getUser(userID, users) {
	const friends = users.filter((u) => u.id === userID);
	return friends.length ? Object.assign({}, friends[0]) : null;
}

function handleMinimize(userID, users, toggle) {
	const newUsers = users.map((u) => {
		if (u.id === userID) {
			const newUser = Object.assign({}, u);
			// if not toggle, then it is openChat
			newUser.minimized = toggle ? !newUser.minimized : false;
			return newUser;
		}
		else {
			return u;
		}
	})
	return newUsers;
}

export function openChat(openChats, friends, userID) {
	return function (dispatch) {
    const chatIdx = openChats.indexOf(userID);
    const newOpenChats = openChats.slice();

    if (chatIdx === -1) {
      newOpenChats.push(userID);
    }
		const newUsers = handleMinimize(userID, friends, false);

		/*const newUsers = friends.map((u) => {
			if (u.id === userID) {
				const newUser = Object.assign({}, u);
				newUser.minimized = false; 
				return newUser;
			} 
			else {
				return u;
			}
		})*/

		dispatch(openChatSuccess(newOpenChats, newUsers));
	}
}

export function closeChat(openChats, userID) {
	return function (dispatch) {
    const chatIdx = openChats.indexOf(userID);
    if (chatIdx == -1) return;
    const newOpenChats = openChats.slice();
    newOpenChats.splice(chatIdx, 1);
		dispatch(closeChatSuccess(newOpenChats));
	}
}

export function toggleChat(users, userID) {
	return function (dispatch) {
		const newUsers = handleMinimize(userID, users, true);
		dispatch(toggleChatSuccess(newUsers));
		
    /*const user = this.getUser(userID);
    const users = this.state.users.slice();
    user.minimized = !user.minimized;
    this.setState({users});*/

	}
}

