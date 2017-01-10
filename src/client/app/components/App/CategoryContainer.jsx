import React, { Component } from 'react';
import CategoryList from './CategoryList';
import AddCategory from './AddCategory';
import { connect } from 'react-redux'


class CategoryContainer extends Component {
    render() {
        return (
            <div className="App-main__category">
                <AddCategory></AddCategory>
                <CategoryList categories={this.props.categories}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  categories: state.categoryReducer
})

export default connect(
  mapStateToProps
)(CategoryContainer)