import * as types from '../actions/actionTypes';
import initialState from './initialState';
import history from '../components/history';
import {push} from 'react-router-redux';

// const store = configureStore();

export default function sessionReducer(state = initialState.session, action, dispatch) {

  switch(action.type) {

    case types.LOG_IN_SUCCESS:
			// history.push('/');
      // store.dispatch(push('/'))
      // dispatch(push('/'))
      return !!sessionStorage.jwt

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
