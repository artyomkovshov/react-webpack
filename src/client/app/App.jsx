import React, { Component, PropTypes } from 'react';
import './App.css';
import Header from './components/App/Header';
import Main from './components/App/Main';


class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Main categoryId = {this.props.params.categoryId}/>
        </div>
    );
  }
}

App.propTypes = {
  params: PropTypes.object.isRequired
};

export default App;
