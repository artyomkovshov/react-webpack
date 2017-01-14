import React, { Component, PropTypes } from 'react';
import './App.css';
import Header from './components/App/Header';
import Progress from './components/App/Progress';
import CategoryContainer from './components/App/CategoryContainer';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isShowActive: false }
    this.showActive = this.showActive.bind(this);
    this.showAll = this.showAll.bind(this);
    this.renderChild = this.renderChild.bind(this);

  }

  showActive() {
    this.setState({ isShowActive: true });
  }

  showAll() {
    this.setState({isShowActive: false});
  }

  renderChild() {
    return this.props.children ? React.cloneElement(this.props.children, { isShowActive: this.state.isShowActive }) : this.props.children;
  }

  render() {
    return (
        <div>
            <Header showActive={this.showActive} showAll={this.showAll}/>
            <Progress></Progress>
            <CategoryContainer></CategoryContainer>
            {this.renderChild()}
        </div>
    );
  }
}

App.propTypes = {
  params: PropTypes.object.isRequired
};

export default App;

