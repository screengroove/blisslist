import React, { Component } from 'react';
import { Link } from 'react-router';
import HeroBG from '../assets/playlist_hero_bg.jpg';


class Hero extends Component {
  render() {
    	const divStyle = {
  		backgroundImage: 'url(' + HeroBG + ')',
	};
      
    return (
	<div className="masthead" style={divStyle}>
		<h1>{this.props.title}</h1>
            <Link to="/categories" className="btn-add">
                <i className="ion-ios-plus-empty"></i>
            </Link>
	</div>
    );
  }
}

export default Hero;
