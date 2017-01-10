import React, { Component } from 'react';
import Search from './Search';
import CheckActive from './CheckActive';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <span className="App-header__name">TO-DO List</span>
                <Search></Search>
                <CheckActive></CheckActive>

            </div>
        );
    }
}

export default Header;