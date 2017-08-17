import * as types from '../actions/actionTypes';
import {messagesInitialState} from './initialState';

export default function messagesReducer(state = messagesInitialState, action) {
	switch (action.type) {
		case types.LOAD_ALL_MESSAGES_SUCCESS: 
			const {messages} = action.messages; 
			const newState = Object.assign({}, state, {messages})
			console.log('newState in LOAD_ALL_MESSAGES_SUCCESS: ', newState); 
			return newState; 

		case types.SEND_MESSAGE_SUCCESS: 
			const newHistory = action.returnedHistory;
			return Object.assign({}, state, {messages: newHistory})

		default: 
			return state; 
	}
}
