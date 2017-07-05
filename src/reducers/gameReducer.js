import * as types from '../actions/actionTypes';
export default function gameReducer(state = [], action) {
	switch (action.type) {
		case types.LOAD_GAMES_SUCCESS:
			return action.games;

		case types.CREATE_GAME_SUCCESS: 
			return [
				...state, 
				Object.assign({}, action.game)
			];

		default: 
			return state;
	}
}
