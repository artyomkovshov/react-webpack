import React, { Component } from 'react';

class CheckActive extends Component {
    render() {
        return (
            <div className="App-header__checkActive">
                <label><input type="checkbox" id="showActive"/>Show active</label>
            </div>


        );
    }
}

export default CheckActive;