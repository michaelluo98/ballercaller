import * as types from './actionTypes';

const BASE_URL = "http://localhost:3000/api/v1";
// const BASE_URL = "https://ballercaller-api.herokuapp.com/api/v1";
const API_KEY = "472ae3d392ae9778f4d7601948113dad046ce1a9fbe6d539ef341a16742d71ae";

export function loadGamesSuccess(games) {
	return { type: types.LOAD_GAMES_SUCCESS, games };
}

export function createGameSuccess(game) {
	return { type: types.CREATE_GAME_SUCCESS, game};
}

export function loadCourtsSuccess(allCourts) {
	return { type: types.LOAD_COURTS_SUCCESS, allCourts };
}

export function findGamesSuccess(foundGames, foundCourts, foundCreators) {
	return { type: types.FIND_GAMES_SUCCESS,
					foundGames, foundCourts, foundCreators }
}

export function clearFoundSuccess(foundGamesEmpty, foundCourtsEmpty, foundCreatorsEmpty) {
	return { type: types.CLEAR_FOUND_SUCCESS,
					foundGamesEmpty, foundCourtsEmpty, foundCreatorsEmpty }
}

export function loadLastGameSuccess(lastGameId) {
	return { type: types.LOAD_LAST_GAME_SUCCESS, lastGameId }
}

export function quickJoinGameSuccess() {
	return { type: types.QUICK_JOIN_GAME_SUCCESS }
}

export function loadTeamsSuccess(teams) {
	return { type: types.LOAD_TEAMS_SUCCESS, teams }
}

export function loadPlayersSuccess(playersOne, playersTwo) {
	return { type: types.LOAD_PLAYERS_SUCCESS, playersOne, playersTwo }
}

export function clearPlayersSuccess(playersOne, playersTwo) {
	return { type: types.CLEAR_PLAYERS_SUCCESS, playersOne, playersTwo}
}

export function loadGames() {
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/games`, {headers})
			.then(res => res.json()).then(res => {
				dispatch(loadGamesSuccess(res));
			});
	}
}

export function loadTeams() {
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/teams`, {headers})
			.then(res => res.json()).then(res => {
				dispatch(loadTeamsSuccess(res.teams));
			})
	}
}

export function loadPlayers(gameId) {
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
	fetch(`${BASE_URL}/games/${gameId}/players`, {headers})
		.then(res => res.json()).then(res => {
			dispatch(loadPlayersSuccess(res.playersOne, res.playersTwo))
		})
	}
}

export function saveGame(game, playersOne, playersTwo) {
	return async (dispatch) => {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`,
			'Accept':'application/json',
			'Content-Type':'application/json'
		})

		const newGame = await fetch(`${BASE_URL}/games`, {
			headers,
			method: 'POST',
			body: JSON.stringify({game: game})
		})
		let teamOneId;
		let teamTwoId;

		await newGame.json().then(res => {
			teamOneId = res.teamOneId;
			teamTwoId = res.teamTwoId;
			return res.id;
		})

		await fetch(`${BASE_URL}/teams/${teamOneId}`, {
			headers,
			method: 'POST',
			body: JSON.stringify({team: {players_attributes: playersOne}})
		})

		await fetch(`${BASE_URL}/teams/${teamTwoId}`, {
			headers,
			method: 'POST',
			body: JSON.stringify({team: {players_attributes: playersTwo}})
		})

		dispatch(createGameSuccess(newGame));
	}
}

export function loadCourts() {
	return function(dispatch) {
 		const headers = new Headers({
 			'Authorization':`Apikey ${API_KEY}`
 		})
 		fetch(`${BASE_URL}/courts`, {headers})
 			.then(res => res.json()).then(res => {
 				dispatch(loadCourtsSuccess(res));
 			});
 	}
}

// functionToCall() {
//
// }
export function findGames(game) {
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`,
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		//dispatch(functionToCall())
		fetch(`${BASE_URL}/games/find`, {
			headers,
			method: 'POST',
			body: JSON.stringify({game: game})
		})
		.then(res => res.json()).then(res => {
				return dispatch(findGamesSuccess(res.games, res.courts, res.creators))
			})
	}
}

export function clearFound() {
	return function(dispatch) {
		return dispatch(clearFoundSuccess([], [], []))
	}
}

export function loadLastGame() {
	return function(dispatch) {
		const headers = new Headers({
 			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/games/last`, {headers})
			.then(res => res.json()).then(res => {
				return dispatch(loadLastGameSuccess(res.lastGameId))
			})
	}
}

export function quickJoinGame(currentUserId, gameId) {
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`,
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		fetch(`${BASE_URL}/games/${gameId}/quickjoin`, {
			headers,
			method: 'POST',
			body: JSON.stringify({user: {id: currentUserId}})
		}).then(res => res.json()).then(res => {
			return dispatch(quickJoinGameSuccess())
		})

	}
}

export function clearPlayers() {
	return function(dispatch) {
		dispatch(clearPlayersSuccess([], []));
	}
}
