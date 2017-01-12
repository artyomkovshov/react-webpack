import React, { Component, PropTypes } from 'react';
import Item from './Item';

class ItemsList extends Component {

    render() {
        const { items, actions } = this.props;
        return (

        <ul className="App-main__items-list">
            {items.map(elem =>
                    <Item key={elem.id} item={elem} {...actions}/>
                )}
        </ul>
        );
    }
}

ItemsList.propTypes = {
  categoryId: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default ItemsList;