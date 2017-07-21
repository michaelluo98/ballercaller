import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import games from './gameReducer';
import session from './sessionReducer';
import profile from './profileReducer'; 

const rootReducer = combineReducers({
	router: routerReducer,
	games,
	session,
	profile, 
});

export default rootReducer;
