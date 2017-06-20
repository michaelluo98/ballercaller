import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import NavBar from './NavBar';
import GameBox from './GameBox';
import SearchForm from './SearchForm';
import CalendarMessengerTab from './CalendarMessengerTab';
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter; 
const Route = ReactRouter.Route; 
const Switch = ReactRouter.Switch;

class App extends Component {

  render() {
    return (
    <MuiThemeProvider>
	  <Router>
		<div className="container">
			<NavBar />
			<GameBox /> 
			<SearchForm />
			<Switch> 
				<Route exact path='/' />
			</Switch> 
			<CalendarMessengerTab />
			
		</div>
	  </Router>

    </MuiThemeProvider>
    );
  }
}

export default App;
