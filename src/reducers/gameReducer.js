import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gameReducer(state = initialState, action) {
	switch (action.type) {
		case types.LOAD_GAMES_SUCCESS:
			console.log('in load games success gameReducer:');
			const {games, courts} = action.games;
			return Object.assign({}, state, {games, courts});

		case types.CREATE_GAME_SUCCESS:
			return [
				...state,
				Object.assign({}, action.game)
			];

		case types.LOAD_COURTS_SUCCESS:
			console.log('in load courts success');
			const allCourts = action.allCourts.courts;
			console.log('allCourts:', allCourts)
			return Object.assign({}, state, {allCourts});
			// return [
			// 	...state,
			// 	Object.assign({}, action.games.allCourts)
			// ];


		default:
			return state;
	}
}
