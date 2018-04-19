import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Loader from "./components/Loader";
import characterData from './data.json';
import CharacterPicker from './components/CharacterPicker.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              StaR2D2
            </Typography>
            <Typography variant="subheading" color="inherit">
              Find SW films by character
            </Typography>
          </Toolbar>
        </AppBar>

        <Typography variant="title" color="inherit" style={{ margin: `20px 24px` }}>
          Characters
        </Typography>

        <CharacterPicker data={characterData} />

        <Loader json={characterData} />
      </React.Fragment>
    );
  }
}

export default App;
