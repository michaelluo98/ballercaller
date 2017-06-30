import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ManageHomePage from './home/ManageHomePage';

class App extends Component {
  render() {
    return (
	    <MuiThemeProvider>
			  <BrowserRouter>
					<div className="container">
						<NavBar />
						<Switch>
							<Route exact path="/" component={ManageHomePage} />
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
