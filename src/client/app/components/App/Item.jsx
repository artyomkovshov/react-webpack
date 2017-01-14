import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Item extends Component {

    constructor(props) {
        super(props);

        this.toogle = this.toogle.bind(this);

    }

    toogle() {
        const { item } = this.props;
        this.props.toogleTodo(item.id);
    }

    render() {
        const { item } = this.props;
        const style = {
            textDecoration: item.done ? 'line-through': 'none'
        }

        return (
            <li className="App-main__item">
                <label><input type="checkbox" onClick={this.toogle} defaultChecked={item.done} className="disabled"/><span className="item-name" style={style}> {item.name}</span></label>
                <div className="item__button-block">
                    <Link to={"/edit/"+item.id} className="edit-button icon" />
                </div>
            </li>
        );
    }
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    toogleTodo: PropTypes.func.isRequired
};

export default Item;