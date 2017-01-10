import React, { Component } from 'react';
import Category from './Category';

class CategoryList extends Component {
    render() {
        return (
            <ul className="App-main__category-list">
                <Category/>
                <Category/>
                <Category/>
            </ul>
        );
    }
}

export default CategoryList;