import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
// import { createStore } from 'redux';
// import rootReducer from './reducers';
// import configureStore from './store/configureStore';
// import { Provider } from 'react-redux';
import './styles/styles.css';
import App from './components/App';

injectTapEventPlugin();

// const store = createStore(rootReducer);

render (
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
);
