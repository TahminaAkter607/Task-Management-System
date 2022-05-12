import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { image, primaryText, secondaryText } = this.props;

    return (
      <div className="card card-clickable" onClick={this.props.onClick}>
        <div className="card">
          {image ? <img className="card-img" src={image} alt={image}/> : <img className="card-img" src={profileimage} style= {{width:30,height:30}} alt={image}/>}
          
          
          <h4 className="card-title">{primaryText}</h4>
          <h6 className="card-text">{secondaryText}</h6>

          {this.props.children}
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  image: PropTypes.string,
  profileimage: PropTypes.string,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  onClick: PropTypes.func
};