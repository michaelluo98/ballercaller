import * as types from '../actions/actionTypes';

const initialState = {
	games: [],
	courts: []
}

export default function gameReducer(state = initialState, action) {
	switch (action.type) {
		case types.LOAD_GAMES_SUCCESS:
			const {games, courts} = action.games
			return Object.assign({}, state, {games, courts});

		case types.CREATE_GAME_SUCCESS:
			return [
				...state,
				Object.assign({}, action.game)
			];

		default:
			return state;
	}
}
