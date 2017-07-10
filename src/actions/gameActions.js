import * as types from './actionTypes';

const BASE_URL = 'http://localhost:3000/api/v1';
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

export function findGamesSuccess(foundGames, foundCourts) {
	return { type: types.FIND_GAMES_SUCCESS, foundGames, foundCourts }
}

export function loadLastGameSuccess(lastGameId) {
	return { type: types.LOAD_LAST_GAME_SUCCESS, lastGameId }
}

export function quickJoinGameSuccess() {
	return { type: types.QUICK_JOIN_GAME_SUCCESS }
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

export function saveGame(game) {
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`,
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		fetch(`${BASE_URL}/games`, {
			headers,
			method: 'POST',
			body: JSON.stringify({game: game})
		})
			.then(game => {
				dispatch(createGameSuccess(game));
			});
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

export function findGames(game) {
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`,
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		fetch(`${BASE_URL}/games/find`, {
			headers, 
			method: 'POST',
			body: JSON.stringify({game: game})
		})
		.then(res => res.json()).then(res => {
				return dispatch(findGamesSuccess(res.games, res.courts))	
			})
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

export function quickJoinGame(currentUser, gameId) {
	console.log('gameId in quickJoinGame: ', gameId)
	console.log('data: ', JSON.stringify({user: {id: currentUser.id}}))
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`,
			'Accept':'application/json',
			'Content-Type':'application/json'
		})
		fetch(`${BASE_URL}/games/${gameId}/quickjoin`, {
			headers, 
			method: 'POST',
			body: JSON.stringify({user: {id: currentUser.id}})
		}).then(res => res.json()).then(res => {
			console.log('res in quickjoin: ', res);
			return dispatch(quickJoinGameSuccess())
		})

	}
}
