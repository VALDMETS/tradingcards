import React from 'react';
import store from '../store';

const Card = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.item.name}</h3>
        <p>{this.props.item.description}</p>
        <span>{this.props.item.power}</span><span>/{this.props.item.defense}</span>
      </div>
    );
  }
});

export default Card;
