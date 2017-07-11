import * as types from '../actions/actionTypes';
import {sessionInitialState} from './initialState';
import history from '../components/history';
import {push} from 'react-router-redux';

export default function sessionReducer(state = sessionInitialState, action, dispatch) {
	console.log('initialState: ', sessionInitialState);
	console.log('State: ', state);

  switch(action.type) {

    case types.LOG_IN_SUCCESS:
			// history.push('/');
      // store.dispatch(push('/'))
      // dispatch(push('/'))
			//console.log('state in sessionReducer: ', state);
			const currentUser = action.currentUser;
			//console.log('currentUser in sessionReducer', currentUser);	
			//const newState = Object.assign({}, state, {session: !!sessionStorage.jwt, currentUser})
			console.log('in log in')
			return Object.assign({}, state, {session: !!sessionStorage.jwt, currentUser});

    case types.LOG_OUT:
      // browserHistory.push('/')
			// history.push('/');
      // dispatch(push('/'))
      // store.dispatch(push('/'))
			console.log('inlog out');
      return Object.assign({}, state, {session: !!sessionStorage.jwt })

		case types.GET_FAVORITES_SUCCESS: 
			console.log('in GET_FAVORITES_SUCCESS');
			const {favorites} = action; 
			return Object.assign({}, state, {favorites})

    default:
      return state;
  }
}
