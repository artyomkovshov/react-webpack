import React, { Component } from 'react';
import Category from './Category';

class CategoryList extends Component {

    render() {
        const array = this.props.categories.map((elem) => <Category  key={elem.id} params={elem}/>);

        return (
            <ul className="App-main__category-list">
                {array}
            </ul>
        );
    }
}


export default CategoryList;