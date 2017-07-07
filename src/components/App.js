import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './navbar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ManageHomePage from './home/ManageHomePage';
import ManageGamePage from './game/ManageGamePage';
import LoginPage from './authentication/logInPage';

class App extends Component {
  render() {
    return (
	    <MuiThemeProvider>
			  <BrowserRouter>
					<div className="container">
						<NavBar />
						<Switch>
							<Route exact path="/" component={ManageHomePage} />
              <Route exact path="/login" component={LoginPage} />
							<Route exact path="/game"
                component={ManageGamePage}
                onEnter={requireAuth} />
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

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default App;


// const bottomRight = {
// 	marginTop: 350,
// 	paddingTop: 350
// }
// <GameBox />
// <Switch>
// 	<Route exact path='/' />
// </Switch>
// <CalendarMessengerTab />
// <SearchForm style={bottomRight}/>
