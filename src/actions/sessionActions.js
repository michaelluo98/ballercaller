import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
// import history from '../components/history';
import {PropTypes} from 'prop-types';
import { push } from 'react-router-redux';

export function loginSuccess(currentUser) {
  console.log(currentUser);
  return {type: types.LOG_IN_SUCCESS, currentUser}
}
//
// function addCurrentUser(dispatch, credentials) {
//   console.log('in addCurrentUser');
//   console.log('credentials in addCurrentUser:', credentials.email)
//   console.log(sessionApi.getCurrentUser);
//   return sessionApi.getCurrentUser(credentials).then(res => {
//     console.log('addCurrentUser res', res);
//     dispatch(loginSuccess(res)); // res is currentUser
//   }).catch(error => {
//     throw(error);
//   });
//   dispatch(loginSuccess());
// }

function addCurrentUser(dispatch, credentials) {
  fetch(`http://localhost:3000/api/v1/users/${credentials.email}`)
    .then(res => res.json()).then(res => {
      dispatch(loginSuccess(res.user));
    })
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      console.log('response jwt', response.jwt);
      if (response.jwt === undefined) {
        console.log('fuuuuuck');
        // history.push('/');
        // dispatch(push('/game'));
      }
      else {
        console.log('setting jwt token');
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


// export function logInFailure() {
//   return function(dispatch)
// }

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT}
}
