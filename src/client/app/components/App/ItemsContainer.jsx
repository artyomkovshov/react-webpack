import React, { Component } from 'react';
import ItemsList from './ItemsList';
import AddItem from './AddItem';

class ItemsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {name: "Cook dinner", id: 1, done: false},
                {name: "Learn react", id: 2, done: false},
                {name: "Fix skedooler", id: 3, done: false}
            ]
        }
    }

    toggleActive() {
        // We should change state in container components :)
    }

    render() {
        return (
            <div className="App-main__items">
                <AddItem></AddItem>
                <ItemsList items={this.state.items} toogleActive={this.toggleActive}/>
            </div>
        );
    }
}

export default ItemsContainer;