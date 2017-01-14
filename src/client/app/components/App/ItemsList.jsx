import React, { Component, PropTypes } from 'react';
import Item from './Item';

class ItemsList extends Component {

    render() {
        const { items, actions, isShowActive } = this.props;
        const filteredItems = !isShowActive ? items.filter(e => e.done === false) : items; 

        return (

        <ul className="App-main__items-list">
            {filteredItems.map(elem =>
                    <Item key={elem.id} item={elem} {...actions}/> 
                )}
        </ul>
        );
    }
}

ItemsList.propTypes = {
  categoryId: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  isShowActive: PropTypes.bool.isRequired
};


export default ItemsList;