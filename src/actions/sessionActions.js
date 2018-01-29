import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
// import history from '../components/history';
//import {PropTypes} from 'prop-types';
//import { push } from 'react-router-redux';

const BASE_URL = "https://ballercaller-api.herokuapp.com/api/v1";
// const BASE_URL = "https://ballercaller-api.herokuapp.com/api/v1";
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

export function addMessageSuccess(newMessageHistory, newUsers, newOpenChats) {
	return {
		type: types.ADD_MESSAGE_SUCCESS,
		newMessageHistory,
		newUsers,
		newOpenChats
	}
}

export function addUserSuccess(newUsers) {
	return {
		type: types.ADD_USER_SUCCESS,
		newUsers
	}
}

export function setUserOfflineSuccess(newUsers) {
	return { type: types.SET_USER_OFFLINE_SUCCESS, newUsers }
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
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/users/${id}/favorites`, {headers})
			.then(res => res.json()).then(res => {
				console.log('res.favorites in getFavorites action: ', res);
				return dispatch(getFavoritesSuccess(res.favorites));
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

// ??? findUser is duplicate of getCurrentUser
export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      if (response.jwt === undefined) {
        // history.push('/');
        // dispatch(push('/game'));
      }
      else {
				//console.log('setting jwt token');
        sessionStorage.setItem('jwt', response.jwt);
        // dispatch(push('/'));
        addCurrentUser(dispatch, credentials);
				// change status of the user
        // dispatch(loginSuccess(credentials));
      }
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
	const headers = new Headers({
		'Authorization':`Apikey ${API_KEY}`,
		'Accept':'application/json',
		'Content-Type':'application/json'
	})
	fetch(`${BASE_URL}/logout/${sessionStorage.currentUserId}`, {
		headers,
		method: 'PATCH'
	})

  sessionStorage.removeItem('jwt');
  sessionStorage.removeItem('currentUserId')
	// ??? need to completely clear the store
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

		dispatch(openChatSuccess(newOpenChats, newUsers));
	}
}

export function closeChat(openChats, userID) {
	return function (dispatch) {
    const chatIdx = openChats.indexOf(userID);
    if (chatIdx === -1) return;
    const newOpenChats = openChats.slice();
    newOpenChats.splice(chatIdx, 1);
		dispatch(closeChatSuccess(newOpenChats));
	}
}

export function toggleChat(users, userID) {
	return function (dispatch) {
		const newUsers = handleMinimize(userID, users, true);
		dispatch(toggleChatSuccess(newUsers));
	}
}

// for when a non-friend sends message
function findUser(userID) {
	const headers = new Headers({
		'Authorization':`Apikey ${API_KEY}`
	})
	fetch(`${BASE_URL}/users/find/${userID}`, {headers})
		.then(res => {
			console.log('res in findUser actions: ', res);
			return res.user;
		})
}

export function addMessage(id, sender_id, recipient_id, message, created_at,
													currentUserId, messageHistory, users, openChats, dispatch) {
		const newMessageHistory = Object.assign({}, messageHistory);
		const chatID = (sender_id.toString() === currentUserId) ? recipient_id : sender_id;
		delete newMessageHistory[recipient_id]
		// either creating a new chat or appending to old chat
		const chat = messageHistory[chatID] ? messageHistory[recipient_id].slice() : [];
		chat.push({id, sender_id, recipient_id, message, created_at});
		newMessageHistory[chatID] = chat;

		const newUsers = users.slice();
		const newOpenChats = openChats.slice();
		// unless receiving data from API, sender will not be equal to currentUser
		if (sender_id.toString() !== currentUserId) {
			if (!getUser(sender_id, users)) { // receiving message from non-friend
				// ??? need to find and push an entirely new user
				const newUser = findUser(sender_id);
        newUsers.push(newUser);
      }
			// add new message from nonfriend to openChats
			if (openChats.indexOf(sender_id) === -1) {
        newOpenChats.push(sender_id);
      }
    }
		dispatch(addMessageSuccess(newMessageHistory, newUsers, newOpenChats));
}

export function sendMessage(currentUserId, recipientId, message,
														messageHistory, users, openChats) {
	return function (dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`,
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		fetch(`${BASE_URL}/friendships/${currentUserId}/${recipientId}/directmessages/send`, {
			headers,
			method: 'POST',
			body: JSON.stringify({message: message})
		})
		.then(res => res.json()).then(res => {
			console.log('res in sendMessage action: ', res.message)
			addMessage(
					res.id, res.message.sender_id, res.message.recipient_id,
					res.message.message, res.created_at, currentUserId,
					messageHistory, users, openChats, dispatch
				);
		})
	}
}

/*function updateUserAPI(userID, status) {
	const headers = new Headers({
		'Authorization':`Apikey ${API_KEY}`,
		'Accept':'application/json',
		'Content-Type':'application/json'
	})
	fetch(`${BASE_URL}/users/${userID}/${status}`, { headers, method: 'POST' })
}*/

export function addUser(user, friends) {
	return function (dispatch) {
		const checkIfFriend = friends.filter((u) => {
			return u.id === user.id
		});
		if (checkIfFriend.length) {
			const updatedFriend = Object.assign({}, checkIfFriend[0]);
			updatedFriend.status = true;
			const updatedFriends = friends.slice().filter((u) => u.id !== user.id);
			updatedFriends.push(updatedFriend);
			dispatch(addUserSuccess(updatedFriends));
		}
		else {
			const newUsers = friends.slice();
			user.status = true;
			newUsers.push(user);
			dispatch(addUserSuccess(newUsers));
		}
	}
}

export function setUserOffline(user, friends) {
	return function(dispatch) {
		const newFriends = friends.slice().filter((u) => {
			return u.id !== user.id
		})
		newFriends.push(user);
		dispatch(setUserOfflineSuccess(newFriends));
	}

}
