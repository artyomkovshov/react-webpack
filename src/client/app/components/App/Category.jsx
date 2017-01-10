import React, { Component } from 'react';



class Category extends Component {

    render() {
        let style = {
            left: this.props.params.indent + 'em'
        }
        return (
            <li style={style} className="App-main__category-item">
                <label><input type="button" className="arrow_down icon" /><span className="category-name">{this.props.params.name}</span></label>
                <input type="button" className="icon edit-button" />
                <div className="item__button-block">
                    <input type="button" className=" remove-button icon" />
                    <input type="button" className=" add-category-button icon" />
                </div>
            </li>
        );
    }
}

export default Category;