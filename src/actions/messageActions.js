import * as types from './actionTypes';

const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = "472ae3d392ae9778f4d7601948113dad046ce1a9fbe6d539ef341a16742d71ae";

export function loadAllMessagesSuccess(messages) {
	return { type: types.LOAD_ALL_MESSAGES_SUCCESS, messages };
}


export function loadAllMessages(current_user_id) {
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/friendships/${current_user_id}/directmessages`, {headers})
			.then(res => res.json()).then(res => {
				console.log(`all directmessages with currentUserId ${current_user_id}: ${res}`);
				dispatch(loadAllMessagesSuccess(res));
			})
	}
}
