import * as types from '../actions/actionTypes';
import {gameInitialState} from './initialState';

export default function gameReducer(state = gameInitialState, action) {
	switch (action.type) {
		case types.LOAD_GAMES_SUCCESS:
			const {games, courts} = action.games;

			console.log('oldstate in LOAD_GAMES_SUCCESS:', state);
			const newState = Object.assign({}, state, {games, courts});
			console.log('newState in LOAD_GAMES_SUCCESS: ', newState);
			return newState;

		case types.CREATE_GAME_SUCCESS:
			console.log('game in CREATE_GAME_SUCCESS: ', action.game)
			console.log('state in CREATE_GAME_SUCCESS:', state);
			return state;

		case types.LOAD_COURTS_SUCCESS:
			const allCourts = action.allCourts.courts;

			return Object.assign({}, state, {allCourts});

		case types.FIND_GAMES_SUCCESS: 
			const {foundGames} = action;
			const {foundCourts} = action;
			console.log('state in found games success:', state);
			if (foundGames.length === 0) {
				const errors = {foundGames: ['error'], 
												foundCourts: ['error']}
				return Object.assign({}, state, errors);
			}
			else {
				return Object.assign({}, state, {foundGames, foundCourts});
			}

		case types.LOAD_LAST_GAME_SUCCESS: 
			const lastGameId = action.lastGameId;
			console.log('lastGameId in reducer: ', lastGameId)
			return Object.assign({}, state, {lastGameId})

		default:
			return state;
	}
}
