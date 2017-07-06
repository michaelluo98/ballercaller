import './ReactotronConfig'
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './styles/styles.css';
import App from './components/App';
import {loadGames, loadCourts} from './actions/gameActions';

injectTapEventPlugin();

//const initialState = {
//	games: []
//}

const store = configureStore();
store.dispatch(loadGames());
store.dispatch(loadCourts());

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
