import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import { push } from 'react-router-redux';
import *  as actionCreators from '../actions/actionCreators';
import {saveDB} from '../helpers/api.js';

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

  handleClick(){
    saveDB(this.state.queue)
     .then(resp =>{
        console.log("SAVE", resp )  
        browserHistory.push('/')        
     })
     console.log("THIS IS QUEUE TO SAVE", this.state.queue )
      
  }


  render() {
      const divStyle = {
        backgroundImage: 'url(' + bg + ')',
    };
        const wrapStyle = {
            backgroundColor: '#fafaf8',
            height: '100%'
        };
    const resultsList = this.props.videos.playlist.map((item, i)=>{
    	return <ResultItem deets={item} key={i} handleAddQueue={ this.handleAddQueue}  />
    })
    const addBtn = (this.state.queue.length > 0) 
                                  ? <button className="btn-save" onClick={this.handleClick.bind(this)}> Save {this.state.queue.length} to Playlist</button>
                                   : <p> Please select items from below</p>
      
    return (
      <div  style={wrapStyle}>
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