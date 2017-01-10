import React, { Component } from 'react';

class AddItem extends Component {
    render() {
        return (
            <div className="App-main__add-items">
                <input type="text" placeholder="New input"/>
                <input type="button" value={"Add"} className="button"/>
            </div>


        );
    }
}

export default AddItem;