import React, { Component, PropTypes } from 'react';
import './App.css';
import Header from './components/App/Header';
import Progress from './components/App/Progress';
import CategoryContainer from './components/App/CategoryContainer';


class App extends Component {
  render() {
    debugger;
    return (
        <div>
            <Header/>
            <Progress></Progress>
            <CategoryContainer></CategoryContainer>
            {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
  params: PropTypes.object.isRequired
};

export default App;

