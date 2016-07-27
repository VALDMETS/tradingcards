import React from 'react';
import store from '../store';

let NewCard = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" ref="newcardname" placeholder="What is the name of your card?"/>
        <input type="text" ref="newcardurl" placeholder="Link to an image of the card"/>
        <input type="text" ref="newcardpower" placeholder="Power Level?"/>
        <input type="text" ref="newcarddefense" placeholder="Defense Level?"/>
        <input type="text" ref="newcarddescription" placeholder="Write some brief flavor text..."/>
        <input type="submit" value="Submit your card!"/>
      </form>
    )
  },
  submit: function(e) {
    e.preventDefault();
    let newCard = {
      name: this.refs.newcardname.value,
      image: this.refs.newcardurl.value,
      power: this.refs.newcardpower.value,
      defense: this.refs.newcarddefense.value,
      description: this.refs.newcarddescription.value
    };
    store.cardList.push(newCard);
    location.hash="#0";
    console.log(store.cardList);
  }
});

export default NewCard;
