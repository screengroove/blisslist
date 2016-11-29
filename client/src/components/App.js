import React, { Component } from 'react';
import Playlist from './Playlist.js';
import main  from '../styles/main.css';

class App extends Component {
  render() {
    console.log("IN APP" )
      
    return (
      <div className="App">
          <Playlist/>
      </div>
    );
  }
}

export default App;
