import * as types from '../actions/actionTypes';
import {gameInitialState} from './initialState';

export default function gameReducer(state = gameInitialState, action) {
	switch (action.type) {
		case types.LOAD_GAMES_SUCCESS:
			const {games, courts} = action.games;

			return Object.assign({}, state, {games, courts});

		case types.CREATE_GAME_SUCCESS:
			return [
				...state,
				Object.assign({}, action.game)
			];

		case types.LOAD_COURTS_SUCCESS:
			const allCourts = action.allCourts.courts;

			return Object.assign({}, state, {allCourts});

		case types.FIND_GAMES_SUCCESS: 
			const foundGames = action.games;
			const foundCourts = action.courts;
			if (foundGames.length === 0) {
				const errors = {foundGames: ['error'], 
												foundCourts: ['error']}
				return Object.assign({}, state, errors);
			}
			else {
				return Object.assign({}, state, {foundGames, foundCourts});
			}

		default:
			return state;
	}
}
