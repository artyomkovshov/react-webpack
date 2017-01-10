import React, { Component } from 'react';

class ItemEdit extends Component {
    render() {
        return (
            <div className="Edit-main__items">
                <div className="items__button-block">
                    <input type="submit" value={"Save Changes"} className="item__button button" />
                    <a href="#" className="item__button button">Cancel</a>
                </div>
                <input type="text" placeholder="Header" className="Edit-main__header-input"/>
                <label><input type="checkbox"/><span>Done</span></label>
                <textarea placeholder="Description" className="Edit-main__text-input" rows="30" cols="160"></textarea>
            </div>
        );
    }
}

export default ItemEdit;