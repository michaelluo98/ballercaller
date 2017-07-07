import {combineReducers} from 'redux';
import games from './gameReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
	games,
	session
});

export default rootReducer;
