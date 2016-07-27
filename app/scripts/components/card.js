import React from 'react';
import store from '../store';

const Card = React.createClass({
  render: function() {
    return (
      <div className="cardoutline">
        <h3>{this.props.item.name}</h3>
        <div>
          <img src={this.props.item.image}/>
        </div>
        <p>{this.props.item.description}</p>
        <span>{this.props.item.power}</span><span>/{this.props.item.defense}</span>
      </div>
    );
  }
});

export default Card;
