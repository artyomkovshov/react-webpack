import React, { Component, PropTypes } from 'react';
import Category from './Category';

class CategoryList extends Component {


    render() {
        const { categories, actions } = this.props;

        //const array = categories.map((elem) => <Category  key={elem.id} category={elem} {...actions}/>);

        return (
            <ul className="App-main__category-list">
                {categories.map(elem =>
                    <Category key={elem.id} category={elem} {...actions}/>
                )}
            </ul>
        );
    }
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default CategoryList;