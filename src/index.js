import './ReactotronConfig'
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './styles/styles.css';
import App from './components/App';
import {
  loadGames,
  loadCourts,
  loadLastGame,
  loadTeams
} from './actions/gameActions';

injectTapEventPlugin();

const store = configureStore();
store.dispatch(loadCourts());
store.dispatch(loadGames());
store.dispatch(loadLastGame());
store.dispatch(loadTeams());

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
