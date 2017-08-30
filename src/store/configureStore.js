import Reactotron from 'reactotron-react-js'
import {applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
	return Reactotron.createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk, reduxImmutableStateInvariant())
	);
}

