import React, { Component, PropTypes } from 'react';
import Search from './Search';
import CheckActive from './CheckActive';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <span className="App-header__name">TO-DO List</span>
                <Search></Search>
                <CheckActive showActive={this.props.showActive} showAll={this.props.showAll}></CheckActive>
            </div>
        );
    }
}

export default Header;

Header.propTypes = {
  showActive: PropTypes.func.isRequired,
  showAll: PropTypes.func.isRequired
};
