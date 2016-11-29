import React, { Component } from 'react';
import Playlist from './Playlist.js';

import { browserHistory } from 'react-router'
import { push } from 'react-router-redux';


class ListItem extends Component {


handleClick(){
  this.props.playVid(this.props.deets);
  browserHistory.push('/player')    
}

  render() {
    const {deets} = this.props;
      const thumbStyle = {
        backgroundImage: 'url(' + deets.thumbnail + ')',
    };
    
    return (
      <div className="list-item" onClick={this.handleClick.bind(this)}>
            <div className="thumb" style={thumbStyle}></div>
          <div className="list-details">
              <p className="list-title">{deets.title.substring(0,40)}</p> 
          </div>
      </div>
    );
  }
}

export default ListItem;