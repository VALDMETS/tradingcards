import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Card from './components/card';
import CardList from './components/cardlist';
// import NewCard from './components/newcard';

const CardRouter = (
  <Router history={hashHistory}>
    <Route path="/:id" component={CardList}/>

    <Route path="*" component={CardList}/>
  </Router>
);

export default CardRouter;

    // <Route path="/newcard" component={NewCard}/>
