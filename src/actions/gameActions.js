import * as types from './actionTypes';
import GameApi from '../api/gameApi';

const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = "9fd351c85aecccbec881389f33c4519f33e08c46e89726d122b4fa13a7f9219d";

export function loadGamesSuccess(games) {
	return { type: types.LOAD_GAMES_SUCCESS, games };
}

export function loadGames() {
	return function(dispatch) {
		return GameApi.getAllGames().then(games => {
			dispatch(loadGamesSuccess(games));
		}).catch(error => {
			throw(error);
		});
	}
}

export function loadGamess() {
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
