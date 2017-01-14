import React, { Component, PropTypes } from 'react';
import Category from './Category';

class CategoryList extends Component {


    render() {
        const { categories, actions } = this.props;

        return (
            <ul className="App-main__category-list">
                {categories.map(elem =>
                    <Category key={elem.id} category={elem} {...actions} setCategory={this.props.setCategory}/>
                )}
            </ul>
        );
    }
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  setCategory: PropTypes.func.isRequired
};

export default CategoryList;