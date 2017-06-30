import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		// initialState,
		applyMiddleware(thunk)
	);
}


// import { createStore, applyMiddleware, compose } from 'redux'
// import { routerMiddleware } from 'react-router-redux'
// import thunk from 'redux-thunk'
// import createHistory from 'history/createBrowserHistory'
// import rootReducer from '../reducers'
//
// export const history = createHistory()
//
// const initialState = {}
// const enhancers = []
// const middleware = [
//   thunk,
//   routerMiddleware(history)
// ]
//
// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension
//
//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }
//
// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// )
//
// const store = createStore(
//   rootReducer,
//   initialState,
//   composedEnhancers
// )
//
// export default store;

// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from '../reducers';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
//
// const store = createStore(
//   rootReducer,
//   applyMiddleware(logger)
// )
//
// export default store;
