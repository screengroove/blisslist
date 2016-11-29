import React, { Component } from 'react';

class ResultItem extends Component {
	constructor(){
		super()

	}

  handleClick(){
    this.props.handleAddQueue(this.props.deets)
    console.log(this.props.deets )
      
  }

  render() {   
  	const {deets} = this.props
  	const thumbStyle = {
  		backgroundImage: 'url(' + deets.snippet.thumbnails.default.url + ')',
  	}
    return (
        <div className="list-item" onClick={this.handleClick.bind(this)}>
          <div className="thumb" style={thumbStyle}></div>
          <div className="list-details">
          		<p className="list-title">{deets.snippet.title.substring(0,40)}</p>	
          </div>
      </div>
    );
  }
}

export default ResultItem;