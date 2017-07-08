import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
// import history from '../components/history';
import {PropTypes} from 'prop-types';
import { push } from 'react-router-redux';

export function loginSuccess(currentUser) {
  return {type: types.LOG_IN_SUCCESS, currentUser}
}

function addCurrentUser(dispatch, credentials) {
  fetch(`http://localhost:3000/api/v1/users/${credentials.email}`)
    .then(res => res.json()).then(res => {
      dispatch(loginSuccess(res.user));
    })
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
