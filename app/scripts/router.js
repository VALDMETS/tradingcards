import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Card from './components/card';
import CardList from './components/cardlist';
import NewCard from './components/newcard';
import Login from './components/login';
import Signup from './components/signup';

const CardRouter = (
  <Router history={hashHistory}>
    <Route path="/newcard" component={NewCard}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/:id" component={CardList}/>
    <Route path="/*" component={Login}/>
  </Router>
);

export default CardRouter;
