import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import games from './gameReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
	router: routerReducer,
	games,
	session
});

export default rootReducer;
