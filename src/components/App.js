import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './navbar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ManageHomePage from './home/ManageHomePage';
import ManageGamePage from './game/ManageGamePage';
import LoginPage from './authentication/logInPage';
import SignUpPage from './authentication/signUpPage';
import history from './history';

class App extends Component {
	constructor() {
		super();
		this.requireAuth = this.requireAuth.bind(this);
	}

  requireAuth = function(nextState, replace) {
		if (sessionStorage.jwt === 'undefined' || !sessionStorage.jwt) {
			history.push('/login');
		}
	}

  render() {
    return (
	    <MuiThemeProvider>
			  <BrowserRouter history={history}>
					<div className="container">
						<NavBar />
						<Switch>
							<Route exact path="/" component={ManageHomePage} />
              <Route exact path="/login" component={LoginPage} />
							<Route exact path="/signup" component={SignUpPage} />
							<Route exact path="/game"
								onEnter={this.requireAuth()}
                component={ManageGamePage}
              />
							<Route exact path="/game/:id" component={ManageGamePage} />
							<Route render={() => {
								return <p>404 ERROR: PAGE NOT FOUND</p>
							}} />
						</Switch>
					</div>
			  </BrowserRouter>
	    </MuiThemeProvider>
    );
  }
}

export default App;
