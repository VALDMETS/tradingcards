import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Card from './components/card';
import CardList from './components/cardlist';

const CardRouter = (
  <Router history={hashHistory}>
    <Route path="/:id" component={CardList}/>
    <Route path="*" component={CardList}/>
  </Router>
);

export default CardRouter;
