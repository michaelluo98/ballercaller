import * as types from '../actions/actionTypes';
import {gameInitialState} from './initialState';

export default function gameReducer(state = gameInitialState, action) {
	switch (action.type) {
		case types.LOAD_GAMES_SUCCESS:
			const {games, courts, creators} = action.games;

			const newState = Object.assign({}, state, {games, courts, creators});
			return newState;

		case types.CREATE_GAME_SUCCESS:
			//console.log('game in CREATE_GAME_SUCCESS: ', action.game)
			//console.log('state in CREATE_GAME_SUCCESS:', state);
			return state;

		case types.LOAD_COURTS_SUCCESS:
			const allCourts = action.allCourts.courts;

			return Object.assign({}, state, {allCourts});

		case types.FIND_GAMES_SUCCESS: 
			const {foundGames, foundCourts, foundCreators} = action;
			if (foundGames.length === 0) {
				const errors = {foundGames: ['error'], 
					foundCourts: ['error'], 
					foundCreators: ['error'] }
				return Object.assign({}, state, errors);
			}
			else {
				return Object.assign({}, state, {foundGames, foundCourts, foundCreators});
			}

		case types.CLEAR_FOUND_SUCCESS: 
			const {foundGamesEmpty, foundCourtsEmpty, foundCreatorsEmpty} = action; 
			const foundEmpty = {foundGames: foundGamesEmpty, 
													foundCourts: foundCourtsEmpty, 
													foundCreators: foundCreatorsEmpty};
			return Object.assign({}, state, foundEmpty);

		case types.LOAD_LAST_GAME_SUCCESS: 
			const lastGameId = action.lastGameId;
			return Object.assign({}, state, {lastGameId})

		case types.QUICK_JOIN_GAME_SUCCESS: 
			return state;

		case types.LOAD_TEAMS_SUCCESS: 
			const teams = action.teams; 
			return Object.assign({}, state, {teams});

		case types.LOAD_PLAYERS_SUCCESS: 
			const {playersOne, playersTwo} = action;
			return Object.assign({}, state, {playersOne, playersTwo})

		case types.CLEAR_PLAYERS_SUCCESS: 
			const teamOne = action.playersOne;
			const teamTwo = action.playersTwo;
			return Object.assign({}, state, {playersOne: teamOne, playersTwo: teamTwo})

		default:
			return state;
	}
}
