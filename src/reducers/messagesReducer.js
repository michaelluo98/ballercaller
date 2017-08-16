import * as types from '../actions/actionTypes';
import {messagesInitialState} from './initialState';

export default function messagesReducer(state = messagesInitialState, action) {
	switch (action.type) {
		case types.LOAD_ALL_MESSAGES_SUCCESS: 
			const {messages} = action; 
			const newState = Object.assign({}, state, {messages})
			console.log('newState in LOAD_ALL_MESSAGES_SUCCESS: ', newState); 
			return newState; 

		default: 
			return state; 
	}
}
