import React, { Component } from 'react';
import Item from './Item';

class ItemsList extends Component {

    render() {
        const array = this.props.items.map((elem) => <Item key={elem.id} params={elem} toogleActive={this.props.toogleActive}/>);

        return (

        <ul className="App-main__items-list">
            {array}
        </ul>
        );
    }
}

export default ItemsList;