import React, { Component } from 'react';
import Playlist from './Playlist.js';
import main  from '../styles/main.css';
import iphone from '../assets/iphone.png';
import landing from '../assets/landing_bg.jpg'

class App extends Component {
  render() {
    console.log("IN APP" )
    const divStyle = {
    	//backgroundImage: 'url(' + iphone + ')',
    }
      
    return (
      <div className="App" style={divStyle}>
          <Playlist/>
      </div>
    );
  }
}

export default App;
