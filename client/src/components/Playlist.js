import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../actions/actionCreators';

import Hero from './Hero';
import ListItem from './ListItem';

class Playlist extends Component{

	constructor(){
		super();
		this.state = {
			videos: {
				my_playlist: []
			}
		}
	}

	componentWillMount(){
		this.props.fetchPlaylist()
	}	

	render(){
		const myPLaylist = this.props.videos.my_playlist.map((item, i)=>{
			return <ListItem deets={item} key={i}/>
		})
		const divStyle = {
        		backgroundColor: '#fafaf8',
        		height: '100%'
    		};
		return(
			<div style={divStyle}>
			<Hero title="Bliss List"/>
				<div className="list-wrap">
				{myPLaylist}
				</div>
			</div>
		)
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
 export default connect( mapStateToProps , mapDispachToProps)(Playlist);