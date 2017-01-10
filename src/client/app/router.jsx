import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Edit from './Edit';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';

export default (
  <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/edit" component={Edit}>
            <Route path="/edit/:itemId" component={Edit}/>
        </Route>
    </Router>
);