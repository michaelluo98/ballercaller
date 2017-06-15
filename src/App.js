import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

class App extends Component {

  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <RaisedButton label="Default" />
      </div>

    </MuiThemeProvider>
    );
  }
}

export default App;
