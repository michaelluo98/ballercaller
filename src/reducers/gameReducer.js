import * as types from '../actions/actionTypes';
import {gameInitialState} from './initialState';

export default function gameReducer(state = gameInitialState, action) {
	switch (action.type) {
		case types.LOAD_GAMES_SUCCESS:
			const {games, courts} = action.games;
			console.log('prevstate in gameReducer load games: ', state);

			const gameState = Object.assign({}, state, {games, courts});
			console.log('newState in gameReducer: ', gameState);
			return gameState;

		case types.CREATE_GAME_SUCCESS:
			return [
				...state,
				Object.assign({}, action.game)
			];

		case types.LOAD_COURTS_SUCCESS:
			const allCourts = action.allCourts.courts;
			console.log('prevstate in gameReducer load courts:', state);
			console.log('allCourts: ', allCourts);

			const courtState = Object.assign({}, state, {allCourts});
			console.log('newState in gameReducer laod courts: ', courtState);
			return courtState;
			// return [
			// 	...state,
			// 	Object.assign({}, action.games.allCourts)
			// ];

		case types.FIND_GAMES_SUCCESS: 
			const foundGames = action.games;
			const foundCourts = action.courts;
			return Object.assign({}, state, {foundGames, foundCourts});

		default:
			return state;
	}
}
