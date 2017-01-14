import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Edit from './Edit';
import ItemsContainer from './components/App/ItemsContainer';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';

export default (
  <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/categories/:categoryId" component={ItemsContainer}/>
        </Route>
        <Route path="/edit/:itemId" component={Edit} />
    </Router>
);