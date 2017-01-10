import React, { Component } from 'react';
import CategoryList from './CategoryList';

class CategoryContainer extends Component {
    render() {
        return (
            <div className="App-main__category">
                <CategoryList/>
            </div>
        );
    }
}

export default CategoryContainer;