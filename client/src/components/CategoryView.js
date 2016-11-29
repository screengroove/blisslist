import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../actions/actionCreators';

import CatItem from './CatItem';
import wallpaper from '../assets/gradient_bg.png';

class Categories extends Component{
	constructor(){
		super();
		this.state = {
			categories: ['Gratitude', 'Anxiety', 'Self Love', 'Chakras', 'Beginners', 'Sleep']
		}
	}

	handleCatSelect(){
		this.props.fetchVideoData( this.state.value);
		this.props.setCurrentCat(this.state.value)		
	}

			
	render(){
	    	const divStyle = {
	  		backgroundImage: 'url(' + wallpaper + ')',
		};
		const queryCategories = this.props.fetchVideoData;
		const catSelectors = this.state.categories.map((item, i) =>{
			return <CatItem title={item} key={i} getCatResults={queryCategories} setCurrentCat={this.props.setCurrentCat} />
		})
		return(
			<div className="category-wrap" style={divStyle}>
			  <Link to="/" className="btn-back">
			    <i className="ion-android-arrow-back"></i>
			</Link>
			<h2>Select a Category</h2>
				<div className="cat-grid">
					{catSelectors}
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
 export default connect( mapStateToProps , mapDispachToProps)(Categories);