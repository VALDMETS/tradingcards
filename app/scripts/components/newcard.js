import React from 'react';
import store from '../store';

let NewCard = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" id="newcardname" placeholder="What is the name of your card?"/>
        <input type="text" id="newcardurl" placeholder="Link to an image of the card"/>
        <input type="text" id="newcardpower" placeholder="Power Level?"/>
        <input type="text" id="newcarddefense" placeholder="Defense Level?"/>
        <input type="text" id="newcarddescription" placeholder="Write some brief flavor text..."/>
        <input type="submit" value="Submit your card!"/>
      </form>
    )
  }
});

export default NewCard;
