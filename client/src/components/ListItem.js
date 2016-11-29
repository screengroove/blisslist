import React, { Component } from 'react';
import Playlist from './Playlist.js';


class ListItem extends Component {
  render() {
    const {deets} = this.props;
      const thumbStyle = {
        backgroundImage: 'url(' + deets.thumbnail + ')',
    };
    
    return (
      <div className="list-item">
            <div className="thumb" style={thumbStyle}></div>
          <div className="list-details">
              <p className="list-title">{deets.title.substring(0,40)}</p> 
          </div>
      </div>
    );
  }
}

export default ListItem;