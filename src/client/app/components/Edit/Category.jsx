
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';



class Category extends Component {

    constructor(props, context) {
        super(props);

        this.setCategory = this.setCategory.bind(this);
    }

    setCategory() {
        const { category } = this.props;
        this.props.setCategory(category.id);
    }

    renderCategory(category) {
        return (
            <div>
                <label><span className="category-name">{category.name}</span></label>
                <div className="item__button-block">
                    <input type="button" className="item__button revert-button icon" onClick={this.setCategory}/>
                </div>

        </div>
        )
    }

    render() {

        const { category } = this.props;

        const style = {
            left: category.indent + 'em'
        }

        return (
            <div>
                <li style={style} className="App-main__category-item">
                    {this.renderCategory(category) }
                </li>
            </div>


        );
    }
}

Category.propTypes = {
      setCategory: PropTypes.func.isRequired,
      category: PropTypes.object.isRequired
};

export default Category;