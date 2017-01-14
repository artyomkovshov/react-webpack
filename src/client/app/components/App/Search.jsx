import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Search extends Component {

        constructor(props) {
            super(props);

            this.clear = this.clear.bind(this);
            this.onKeyUp = this.onKeyUp.bind(this);
            this._applyFilter = this._applyFilter.bind(this);

        }

        onKeyUp(event) {
            if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 8) {
                this._applyFilter();
            }            
        }

        clear() {
            this.refs.input.value = '';
            this._applyFilter();
        }

        _applyFilter() {
            const currentRoute = browserHistory.getCurrentLocation();
            browserHistory.push({
                pathname: currentRoute.pathname,
                query: { filter: this.refs.input.value } 
            })
        }

    
        render() {
            return (
                <div className="App-header__search">
                    <input type="text" placeholder="Search" ref="input" onKeyUp={this.onKeyUp}/>
                    <input type="button" className="icon clear-button" onClick={this.clear}/>
                </div>
            );
    }
}

export default Search;


