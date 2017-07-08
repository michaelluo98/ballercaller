import * as types from '../actions/actionTypes';
import {sessionInitialState} from './initialState';
import history from '../components/history';
import {push} from 'react-router-redux';

// const store = configureStore();

//let newInitialState = Object.assign({}, initialState.session, initialState.currentUser);
export default function sessionReducer(state = sessionInitialState, action, dispatch) {

  switch(action.type) {

    case types.LOG_IN_SUCCESS:
			// history.push('/');
      // store.dispatch(push('/'))
      // dispatch(push('/'))
			console.log('state in sessionReducer: ', state);
			const currentUser = action.currentUser;
			console.log('currentUser in sessionReducer', currentUser);	
			//const newState = Object.assign({}, state, {session: !!sessionStorage.jwt, currentUser})
			return Object.assign({}, state, {session: !!sessionStorage.jwt, currentUser});

    case types.LOG_OUT:
      // browserHistory.push('/')
			// history.push('/');
      // dispatch(push('/'))
      // store.dispatch(push('/'))
      return !!sessionStorage.jwt

    default:
      return state;
  }
}
