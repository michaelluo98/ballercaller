import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import NavBar from './NavBar';

class App extends Component {

  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <NavBar />
      </div>

    </MuiThemeProvider>
    );
  }
}

export default App;
