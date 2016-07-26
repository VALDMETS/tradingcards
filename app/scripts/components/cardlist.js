import React from 'react';
import Card from './card';
import store from '../store';

const CardList = React.createClass({
  render: function(id) {
    // let listArray = store.cardList.map(function(card, i){
    //   return <Card item={card} key={i}/>;
    // });
    // console.log(this.props.params);
    return (
      <container>
        <Card item={store.cardList[this.props.params.id]}/>
      </container>
    );
  }
});

export default CardList
