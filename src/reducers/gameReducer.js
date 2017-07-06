import * as types from '../actions/actionTypes';

const initialState = {
	games: [],
	courts: [],
	allCourts: []
}

export default function gameReducer(state = initialState, action) {
	switch (action.type) {
		case types.LOAD_GAMES_SUCCESS:
			console.log('inhur');
			const {games, courts} = action.games
			return Object.assign({}, state, {games, courts});

		case types.CREATE_GAME_SUCCESS:
			return [
				...state,
				Object.assign({}, action.game)
			];

		case types.LOAD_COURTS_SUCCESS:
			console.log('inhurrr');
			const {allCourts} = action.games;
			return Object.assign({}, state, {allCourts});
			// return [
			// 	...state,
			// 	Object.assign({}, action.games.allCourts)
			// ];

		default:
			return state;
	}
}
