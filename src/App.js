import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import NavBar from './NavBar';
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
			<Switch> 
				<Route exact path='/' />
			</Switch> 
			
		</div>
	  </Router>

    </MuiThemeProvider>
    );
  }
}

export default App;
