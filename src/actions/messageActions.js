import * as types from './actionTypes';

// todo: need to delete loadAllMessagesSuccess, because will be maintaining 
//     the state in the component 
const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = "472ae3d392ae9778f4d7601948113dad046ce1a9fbe6d539ef341a16742d71ae";

export function loadAllMessagesSuccess(messages) {
	return { type: types.LOAD_ALL_MESSAGES_SUCCESS, messages };
}

export function sendMessageSuccess(message) {
	console.log('in sendMessageSuccess: ', message);
	return { type: types.SEND_MESSAGE_SUCCESS, message };
}


export function loadAllMessages(current_user_id) {
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/friendships/${current_user_id}/directmessages`, {headers})
			.then(res => res.json()).then(res => {
				dispatch(loadAllMessagesSuccess(res));
			})
	}
}


export function sendMessage(history, currentUserId, recipientId, content) {
	console.log('--------- in sendMessage action');
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`,
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		fetch(`${BASE_URL}/friendships/${currentUserId}/${recipientId}/directmessages/send`, {
			headers,
			method: 'POST',
			body: JSON.stringify({message: content})
		})
			.then(res => res.json()).then(res => {
				/*const newHistory = {};
				// !null is true: sending message
				const chatID = (!currentUserId) ? recipientId : currentUserId;
				// either creating a new chat or appending to old chat
				const chat = history[chatID] ? history[chatID].slice() : [];
				chat.push(res.message);
				newHistory[chatID] = chat;
				const returnedHistory = Object.assign({}, history, newHistory);
				console.log('history in sendMessage action: ', history); 
				console.log('newHistory in sendMessage action: ', newHistory); 
				console.log('returnedHistory in sendMessage action: ', returnedHistory);*/

				dispatch(sendMessageSuccess(res));
			})
	}
}
