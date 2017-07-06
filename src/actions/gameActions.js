import * as types from './actionTypes';

const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = "472ae3d392ae9778f4d7601948113dad046ce1a9fbe6d539ef341a16742d71ae";

export function loadGamesSuccess(games) {
	return { type: types.LOAD_GAMES_SUCCESS, games };
}

export function createGameSuccess(game) {
	return { type: types.CREATE_GAME_SUCCESS, game };
}

export function loadCourtsSuccess(allCourts) {
	console.log('inload:', allCourts)
	return { type: types.LOAD_COURTS_SUCCESS, allCourts };
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
	// console.log(game);
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
				console.log('inside fetch req: ', res);
 				dispatch(loadGamesSuccess(res));
 			});
 	}
}
