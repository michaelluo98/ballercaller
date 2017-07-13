import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
// import history from '../components/history';
//import {PropTypes} from 'prop-types';
//import { push } from 'react-router-redux';

const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = "472ae3d392ae9778f4d7601948113dad046ce1a9fbe6d539ef341a16742d71ae";

export function loginSuccess(currentUser) {
  return {type: types.LOG_IN_SUCCESS, currentUser}
}

export function getFavoritesSuccess(favorites) {
	return {type: types.GET_FAVORITES_SUCCESS, favorites}
}

export function removeFromFavoritesSuccess(id) {
	return {type: types.REMOVE_FROM_FAVORITES_SUCCESS, id}
}

function addCurrentUser(dispatch, credentials) {
  fetch(`${BASE_URL}/users/${credentials.email}`)
    .then(res => res.json()).then(res => {
      dispatch(loginSuccess(res.user));
    })
}

export function removeFromFavorites(player) {
	return function(dispatch) {
		dispatch(removeFromFavoritesSuccess(player.id));
	}
}

export function getFavorites(id) {
	console.log('id in getFavorites: ', id)
	return function(dispatch) {
		const headers = new Headers({
			'Authorization':`Apikey ${API_KEY}`
		})
		fetch(`${BASE_URL}/users/${id}/favorites`, {headers})
			.then(res => res.json()).then(res => {
				console.log('favorites in getFavorites: ', res.favorites)
				dispatch(getFavoritesSuccess(res.favorites));
			})
	}
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
			//console.log('response jwt', response.jwt);
      if (response.jwt === undefined) {
        // history.push('/');
        // dispatch(push('/game'));
      }
      else {
				//console.log('setting jwt token');
        sessionStorage.setItem('jwt', response.jwt);
        // dispatch(push('/'));
        addCurrentUser(dispatch, credentials);
        // dispatch(loginSuccess(credentials));
      }
    }).catch(error => {
      throw(error);
    });
  };
}


export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT}
}
