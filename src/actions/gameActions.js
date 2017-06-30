import * as types from './actionTypes';

export function createGame(game) {
	return { type: types.CREATE_GAME, game }
}
