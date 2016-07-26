import React from 'react';
import store from '../store';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function() {
    let listArray = store.cardList.map(function(card,i){
      return <a href={"#"+i} key={i}>{card.name}</a>
    });
    return (
      <div>
        <a href="#newcard">New Card</a>
        {listArray}
      </div>
    );
  }
});

export default Nav;
