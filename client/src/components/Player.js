import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../actions/actionCreators';
import { Link } from 'react-router';


class Player extends Component {
	constructor(){
		super();
			this.state = {
			    url: null,
			    playing: true,
			    volume: 0.8,
			    played: 0,
			    loaded: 0,
			    duration: 0
			}
	}


	  playPause = () => {
    		this.setState({ playing: !this.state.playing })
  	}

  	stop = () => {
  		console.log("STOP ME" )	
   		 this.setState({ url: null, playing: false })
  	}

  render() {
	const vidID = this.props.videos.current_vid.videoID
	const vidUrl = `https://www.youtube.com/watch?v=${vidID}`
    return (
      <div className="player-wrap">
       	  <Link to="/" className="btn-back">
			<i className="ion-android-arrow-back"></i>
		</Link>
       	<ReactPlayer 
       		ref={player => { this.player = player }}
       		url={vidUrl}
       		className='react-player'
       		width={427}
            		height={240}
            		onPlay={() => this.setState({ playing: true })}
            		onPause={() => this.setState({ playing: false })}
            		onDuration={duration => this.setState({ duration })}
       		playing 
       	/>
       	<p className="player-title">{this.props.videos.current_vid.title}</p>
       	
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
 export default connect( mapStateToProps , mapDispachToProps)(Player);