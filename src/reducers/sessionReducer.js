import * as types from '../actions/actionTypes';
import initialState from './initialState';
import history from '../components/history';
import {push} from 'react-router-redux';

// const store = configureStore();

let newInitialState = Object.assign({}, initialState.session, initialState.currentUser);
export default function sessionReducer(state = newInitialState, action, dispatch) {

  switch(action.type) {

    case types.LOG_IN_SUCCESS:
			// history.push('/');
      // store.dispatch(push('/'))
      // dispatch(push('/'))
			console.log('newinitialstate: ', newInitialState);
			const currentUser = action.currentUser;
			console.log('currentUser in sessionReducer', currentUser);	
			const newState = Object.assign({}, state, {session: !!sessionStorage.jwt, currentUser})
			console.log('newState:', newState);
			//return newState;
			return {session: !!sessionStorage.jwt, currentUser};

			//return Object.assign({}, state, {session: !!sessionStorage.jwt, currentUser: {currentUser}});

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
