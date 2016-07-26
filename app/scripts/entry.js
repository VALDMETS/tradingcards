import React from 'react';
import ReactDOM from 'react-dom';
import CardRouter from './router';
import Nav from './components/nav';

ReactDOM.render(<Nav/>, document.getElementById('navbar'));
ReactDOM.render(CardRouter, document.getElementById('container'));
