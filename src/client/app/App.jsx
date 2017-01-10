import React, { Component } from 'react';
import './App.css';
import Header from './components/App/Header';
import Main from './components/App/Main';


class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
  }
}

export default App;
