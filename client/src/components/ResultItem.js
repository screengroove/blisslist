import React, { Component } from 'react';

class ResultItem extends Component {
	constructor(){
		super()
              this.state = {
                selected: false
              }
	}

  handleClick(){
    this.props.handleAddQueue(this.props.deets) 
    this.setState({
      selected: !this.state.selected
    }) 
  }

  render() {   
  	const {deets} = this.props
  	const thumbStyle = {
  		backgroundImage: 'url(' + deets.snippet.thumbnails.default.url + ')',
  	}
    const ikon = this.state.selected 
                                                    ? <i className="ion-checkmark-circled green"></i> 
                                                     :  <i className="ion-plus-circled"></i>
    return (
        <div className="list-item" onClick={this.handleClick.bind(this)}>
          <div className="thumb" style={thumbStyle}></div>
          <div className="list-details">
          		<p className="list-title">{deets.snippet.title.substring(0,40)}</p>
                    {ikon}
          </div>
      </div>
    );
  }
}

export default ResultItem;