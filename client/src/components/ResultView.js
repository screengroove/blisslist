import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import *  as actionCreators from '../actions/actionCreators';

import ResultItem from './ResultItem';
import bg from '../assets/results_bg.jpg';


class Results extends Component {
  constructor(){
    super();
    this.state = {
      queue: []
    }
    this.handleAddQueue = this.handleAddQueue.bind(this);
  }

  handleAddQueue(vid){
    this.setState({
      queue: [...this.state.queue, vid]
    })
  }


  render() {
      const divStyle = {
        backgroundImage: 'url(' + bg + ')',
    };
    const resultsList = this.props.videos.playlist.map((item, i)=>{
    	return <ResultItem deets={item} key={i} handleAddQueue={ this.handleAddQueue}  />
    })
    const addBtn = (this.state.queue.length > 0) 
                                  ? <button className="btn-save"> Save {this.state.queue.length} to Playlist</button>
                                   : <p> Please select items below</p>
      
    return (
      <div  >
          	<div className="masthead"  style={divStyle}>
                <Link to="/categories" className="btn-back">
                  <i className="ion-android-arrow-back"></i>
              </Link>
		<h1>{this.props.categories.currentCategory}</h1>
            <div className="action-header">
                {addBtn}
            </div>
	</div>

          <div className="list-wrap">
           {resultsList}
          </div>
         
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos,
    categories: state.categories

  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
 export default connect( mapStateToProps , mapDispachToProps)(Results);