import * as types from '../actions/actionTypes';
import initialState from './initialState';
// import {browserHistory} from 'react-router';
// import createHistory from 'history/createBrowserHistory'
import history from '../components/history';

export default function sessionReducer(state = initialState.session, action) {

  switch(action.type) {

    case types.LOG_IN_SUCCESS:
      //createHistory.push('/')
			history.push('/');
      return !!sessionStorage.jwt

    case types.LOG_OUT:
      // browserHistory.push('/')
			history.push('/');
      return !!sessionStorage.jwt

    default:
      return state;
  }
}
