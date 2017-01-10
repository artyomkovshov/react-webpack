import React, { Component } from 'react';
import { Link } from 'react-router';

class Item extends Component {
    render() {
        return (
            <li className="App-main__item">
                <label><input type="checkbox"/><span className="item-name">{this.props.params.name}</span></label>
                <div className="item__button-block">
                    <Link to="/edit/1" className="edit-button icon" />
                </div>
            </li>
        );
    }
}

export default Item;