import * as types from '../actions/actionTypes';
import {messagesInitialState} from './initialState';

export default function messagesReducer(state = messagesInitialState, action) {
	switch (action.type) {
		case types.LOAD_ALL_MESSAGES_SUCCESS: 
			const {messages} = action.messages; 
			const newState = Object.assign({}, state, {messages})
			return newState; 

		case types.SEND_MESSAGE_SUCCESS: 
			const newHistory = action.message;
			console.log('in sendMessageSuccess in reducer: ', newHistory);
			return Object.assign({}, state, {messages: newHistory})

		default: 
			return state; 
	}
}
