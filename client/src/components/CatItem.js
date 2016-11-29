import React, { Component } from 'react';

class CatItem extends Component {

  handleClick(){
  	this.props.getCatResults(this.props.title)
      //this.state.videosToAdd.push(this.props.title)
      this.props.setCurrentCat(this.props.title)
  }

  render() {
 
    return (
      <div className="cat-item" onClick={this.handleClick.bind(this)}>
      	{this.props.title}
      </div>
    );
  }
}

export default CatItem;
